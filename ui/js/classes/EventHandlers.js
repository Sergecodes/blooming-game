import Party from "/business/classes/Party";
import Player from "/business/classes/Player";
import { Profession, PROFESSIONS } from '/business/classes/Profession';
import { DREAMS } from '/business/classes/Dream';
import { ASSETS } from '/business/classes/Asset';
import Utils from './Utils';

// l'objet global "party"
export let party;

export default class EventHandlers {
  constructor() {
    if (this.constructor() == EventHandlers) {
      throw new Error("This class can't be instantiated!");
    }
  }
  
  /* evoquee lorsque la valeur du montant max de small deal est modifiee */
  static onChangeMaxSmallDealAmt(event) {
    // le montant minimum d'un big deal est 1.5 fois le montant max d'un small deal
    const newMinBigDealAmt = 1.5 * parseInt(event.target.value);
    let bigDealInput = document.querySelector(".js-big-deal-setup__input");
    bigDealInput.min = newMinBigDealAmt;
    bigDealInput.value = newMinBigDealAmt;
  }

  /* evoquee lorsque une option pour choisir le nombre de joueurs est clickee */
  static onClickPlayerSelectOption(event) {
    const newNumOfPlayers = parseInt(event.target.value);
    let playersTable = document.querySelector(".js-players-table");

    let oldNumOfPlayers = 0;
    for (let player of playersTable.children) {
      const styles = getComputedStyle(player);
      if (styles.getPropertyValue("display") === "block") oldNumOfPlayers++;
    }

    if (oldNumOfPlayers === newNumOfPlayers) {
      return;
    } else if (newNumOfPlayers > oldNumOfPlayers) {
      for (let i = 2; i <= newNumOfPlayers; i++) {
        let player = document.querySelector(`.js-player-${i}-setup`);
        player.style.display = "block";
      }

      // ou tout simplement else{...}
    } else if (oldNumOfPlayers > newNumOfPlayers) {
      for (let i = oldNumOfPlayers; i > newNumOfPlayers; i--) {
        // i-1 car l'indice va de 0 a length-1
        playersTable.children[i - 1].style.display = "none";
      }
    }
  }

  /* evoquee lorsque le bouton OK est clicke' (quand le formulaire du setup est soumi) */
  static onCompleteInitialSetup(event) {
    let form = document.forms["gameSetup"];
    for (const input of form.elements) {
      if (input.value === "") {
        return false;
      }
      // ajouter des conditions aux autres elements du formulaire
      // ...
    }

    // pour ne pas soumettre le formulaire et recharger la page
    event.preventDefault();

    const setupWrapper = document.querySelector(".js-setup-forms-wrapper");
    setupWrapper.style.display = "none";

    const chooseDreamWrapper = document.querySelector(".js-choose-dream-wrapper");
    chooseDreamWrapper.style.display = "flex";
    chooseDreamWrapper.style.margin = "5px";

    const playersSetup = document.querySelector(".js-players-table").children;
    for (let i = 0; i < playersSetup.length; i++) {
      const playersSetupStyle = getComputedStyle(playersSetup[i]);
      // si ce setup est visible alors le joueur est "actif"
      // mets son "choose-dream" a display: block (sache qu'il ne sera plus un "flex-item")
      if (playersSetupStyle.display !== 'none') {
        const playerChooseDreamForm = document.querySelector(`.js-choose-dream--p${i+1}`);
        playerChooseDreamForm.style.display = 'block';
      }
    }

    const startButton = document.querySelector('.js-start-button');
    startButton.style.display = 'block';

    Utils.insertPlayerNamesInChooseDreamForm();

    // Party(maxNumOfChildren, maxSmallDealAmt, minLargeDealAmt, loanInterestPercent, exitAmt, duration)
    // obj: { maxNumOfChildren, maxSmallDealAmt, minBigDealAmt, loanInterestPercent, exitAmt, duration };
    let obj = Utils.getPartyConstructorVals();
    party = new Party(
      obj.maxNumOfChildren,
      obj.maxSmallDealAmt,
      obj.minBigDealAmt,
      obj.loanInterestPercent,
      obj.exitAmt,
      obj.duration
    );
    party.players = Utils.initialPlayersInfo();
    party.assets = ASSETS;
    party.dreams = DREAMS;
    party.professions = PROFESSIONS;
    console.log(party);
  }

  /* ajouter l'evenement a effectuer lorsqu'un joueur choisir un autre reve (en parcourant les reves) */
  static onChangeDream() {
    function PlayerPosition(position) {
      this.position = position;
    };

    const player1 = new PlayerPosition(0);
    const player2 = new PlayerPosition(0);
    const player3 = new PlayerPosition(0);

    let leftArrows = document.querySelectorAll(".js-choose-dream__arrow--left");
    for (let leftArrow of leftArrows) {
      leftArrow.addEventListener('click', e => {
        const playerNum = parseInt(e.target.dataset.playerNum);

        if(playerNum === 1) {
          player1.position <= 0 ? player1.position = DREAMS.length - 1 : player1.position -= 1;
          Utils.createDream(DREAMS[player1.position], playerNum);

        } else if(playerNum === 2) {
          player2.position <= 0 ? player2.position = DREAMS.length - 1 : player2.position -= 1;
          Utils.createDream(DREAMS[player2.position], playerNum);

        } else if(playerNum === 3) {
          player3.position <= 0 ? player3.position = DREAMS.length - 1 : player3.position -= 1;
          Utils.createDream(DREAMS[player3.position], playerNum);
        }
      });
    }

    let rightArrows = document.querySelectorAll(".js-choose-dream__arrow--right");
    for (let rightArrow of rightArrows) {
      rightArrow.addEventListener('click', e => {
        const playerNum = parseInt(e.target.dataset.playerNum);

        if(playerNum == 1) {
          player1.position >= DREAMS.length - 1 ? player1.position = 0 : player1.position += 1;
          Utils.createDream(DREAMS[player1.position], playerNum);

        } else if(playerNum == 2) {
          player2.position >= DREAMS.length - 1 ? player2.position = 0 : player2.position += 1;
          Utils.createDream(DREAMS[player2.position], playerNum);

        } else if(playerNum == 3) {
          player3.position >= DREAMS.length - 1 ? player3.position = 0 : player3.position += 1;
          Utils.createDream(DREAMS[player3.position], playerNum);
        }
      });
    }
  }

  /* lorsqu'un joueur appuie sur le bouton "Commencer" */
  static onStartGame(event) {
    // creer et inserer les pions des joueurs
    Utils.createPlayerMarkers();
    // creer les cases pour distinguer le joueur courant des autres joueurs
    Utils.insertPlayerBoxes();
    // remplir certains elements par l'information du premier joueur
    Utils.initializeFirstPlayerSpots();

    const chooseDreamWrapper = document.querySelector(".js-choose-dream-wrapper");
    chooseDreamWrapper.style.display = 'none';

    let startButton = document.querySelector('.js-start-button');
    startButton.style.display = 'none';
    let gameBoard = document.querySelector('.js-game-board');
    gameBoard.style.display = 'block';
    let page = document.querySelector('.page');
    page.style.background = '#E2ECF4';  // une version plus foncee de 'aliceblue'
    // page.style.background = 'aliceblue';

    // initialiser tous les tooltips bootstrap de la page
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    });
  }

  /* quand un joueur lance le de */
  static onRollDice(event) {

  }

  static checkPlayersNames(event) {
    const names = {
      player1: document.querySelector('#playerInput1').value,
      player2: document.querySelector('#playerInput2').value,
      player3: document.querySelector('#playerInput3').value
    };
    document.querySelector('#playerInput2').style.borderColor = '';
    document.querySelector('#playerInput3').style.borderColor = '';
    const elm = document.querySelector('.para-test');
    if(elm) {
      elm.remove();
    }
    if(names.player1 === names.player2){
      EventHandlers.showAlert('.player-2-setup', 'please choose a different name','#playerInput2')
    }
    if(names.player1 === names.player3) {
      EventHandlers.showAlert('.player-3-setup', 'please choose a different name','#playerInput3')
    }
    if(names.player2 === names.player3) {
      EventHandlers.showAlert('.player-3-setup', 'please choose a different name','#playerInput3')
    }
  }

  static showAlert(parentSelector, message, inputSelector) {
    document.querySelector(inputSelector).style.borderColor = 'red';
    const p = document.createElement('p');
    p.classList += 'para-test alert alert-danger w-75';
    p.textContent = message;
    document.querySelector(parentSelector).insertBefore(p, document.querySelector(parentSelector).firstChild);
    console.log('please choose a different name...');
  }
}
