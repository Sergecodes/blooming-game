import Party from "./classes/Party";
import Player from "./classes/Player";
import { Profession, PROFESSIONS } from './classes/Card';
import { DREAMS } from './classes/Dream';
import { ASSETS } from './classes/Asset';
import {
  createDream,
  getPartyConstructorVals,
  initialPlayersInfo,
  createPlayerMarkers,
  insertPlayerBoxes,
  insertPlayerNamesInChooseDreamForm,

} from "./utils";

// l'objet global "party"
let party;

/* evoquee lorsque la valeur du montant max de small deal est modifiee */
export function onChangeMaxSmallDealAmt(event) {
  // le montant minimum d'un big deal est 1.5 fois le montant max d'un small deal
  const newMinBigDealAmt = 1.5 * parseInt(event.target.value);
  let bigDealInput = document.querySelector(".js-big-deal-setup__input");
  bigDealInput.min = newMinBigDealAmt;
  bigDealInput.value = newMinBigDealAmt;
}

/* evoquee lorsque une option pour choisir le nombre de joueurs est clickee */
export function onClickPlayerSelectOption(event) {
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
export function onCompleteInitialSetup(event) {
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

  insertPlayerNamesInChooseDreamForm();

  // Party(maxNumOfChildren, maxSmallDealAmt, minLargeDealAmt, loanInterestPercent, duration, startTime)
  // obj: { maxNumOfChildren, maxSmallDealAmt, minBigDealAmt, loanInterestPercent, duration, startTime };
  let obj = getPartyConstructorVals();
  party = new Party(
    obj.maxNumOfChildren,
    obj.maxSmallDealAmt,
    obj.minBigDealAmt,
    obj.loanInterestPercent,
    obj.duration,
    obj.startTime
  );
  party.players = initialPlayersInfo();
  party.assets = ASSETS;
  party.dreams = DREAMS;
  party.professions = PROFESSIONS;
  console.log(party);
}

/* ajouter l'evenement a effectuer lorsqu'un joueur choisir un autre reve (en parcourant les reves) */
export function onChangeDream() {
  let position = 0;
  let leftArrows = document.querySelectorAll(".js-choose-dream__arrow--left");
  for (let leftArrow of leftArrows) {
    leftArrow.addEventListener('click', e => {
      const playerNum = e.target.dataset.playerNum;
      position <= 0 ? position = DREAMS.length - 1 : position -= 1;
      createDream(DREAMS[position], parseInt(playerNum));
    });
  }

  let rightArrows = document.querySelectorAll(".js-choose-dream__arrow--right");
  for (let rightArrow of rightArrows) {
    rightArrow.addEventListener('click', e => {
      const playerNum = e.target.dataset.playerNum;
      position >= DREAMS.length - 1 ? position = 0 : position += 1;
      createDream(DREAMS[position], parseInt(playerNum));
    });
  }
}

/* lorsqu'un joueur appuie sur le bouton "Commencer" */
export function onStartGame(event) {
  // creer et inserer les pions des joueurs
  createPlayerMarkers();
  // creer les cases pour distinguer le joueur courant des autres joueurs
  insertPlayerBoxes();

  // TODO: insert player info into Party...
  const chooseDreamWrapper = document.querySelector(".js-choose-dream-wrapper");
  chooseDreamWrapper.style.display = 'none';

  let startButton = document.querySelector('.js-start-button');
  startButton.style.display = 'none';
  let gameBoard = document.querySelector('.js-game-board');
  gameBoard.style.display = 'block';
  let page = document.querySelector('.page');
  page.style.background = '#E2ECF4';  // une version plus foncee que 'aliceblue'
  // page.style.background = 'aliceblue';

  // initialiser tous les tooltips bootstrap de la page
  let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
}
