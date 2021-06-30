/** Contient les fonctions d'utilites et constantes importantes */
import { party } from './EventHandlers';
import { RatRacePlayer } from '/business/classes/Player';
import Profession from '/business/classes/Profession';

export const SAVINGS_AMT = 10000;
// le cout des reves
export const DREAMS_COST = 1000000;
const NUM_RAT_RACE_CELLS = 21;
const NUM_FAST_TRACK_CELLS = 30;
const SPACE_BG_COLORS = {
  cashflow: 'yellow',
  dream: '#AE63AE',
  divorce: '#D32F2F',
  lawsuit: '#F24B5B',
  taxAudit: '#F24B5B',
  opportunity: 'rgb(67, 160, 71)',
  charity: 'rgb(0, 193, 218)',
  doodad: '#83A296',
  market: '#0277BD',
  baby: '#FFB74D',
  paycheck: '#FDD835',
  downsized: '#D32F2F'
};

export default class Utils {
  constructor() {
    if (this.constructor() == Utils) {
      throw new Error("This class cant be instantiated!");
    }
  }

  /* obtenir le nombre de joueurs dans la partie (a travers le html) */
  static getNumOfPlayers() {
    let numPlayers = 0;
    const playerSetups = document.querySelector('.js-players-table').children;

    for (let i = 0; i < playerSetups.length; i++) {
      if (getComputedStyle(playerSetups[i]).display !== 'none') {
        numPlayers++;
      }
    }

    return numPlayers;
  }

  /* creer un reve (linserer dans le html) et laffecter au joueur qui la choisi */
  static createDream(dream, playerNum) {
    let dreamInfo = document.querySelector(`.js-dream-info--p${playerNum}`);
    dreamInfo.innerHTML = `<p class="dream-title">${dream.name}</p>
                          <p class="dream-description">${dream.description}</p>`;

    // mettre a jour le reve du joueur
    if (party !== undefined) {
      party.players[playerNum - 1].dream = dream;
    }

  }

  /* retourner les joueurs dune partie et leurs informations initiales(nom, couleur, metier) */
  static initialPlayersInfo() {
    const numPlayers = Utils.getNumOfPlayers();
    let players = [];

    for (let i = 0; i < numPlayers; i++) {
      let nameAndColour = Utils.getPlayerNameAndColour(i+1);
      // on cree le joueur RatRace
      players.push(
        new RatRacePlayer(i+1, nameAndColour.playerName, nameAndColour.playColour, Profession.getRandomProfession())
      );
    }

    return players;
  }

  /* inserer les noms des joueurs dans le formulaire de selection de reve */
  static insertPlayerNamesInChooseDreamForm() {
    let players = Utils.initialPlayersInfo();

    for (let i = 0; i < players.length; i++) {
      let nameArea = document.querySelector(`.js-choose-dream--p${i+1}__name`);
      let jobArea = document.querySelector(`.js-player-info--p${i+1}__job`);
      let salaryArea = document.querySelector(`.js-player-info--p${i+1}__salary`);
      let initialCashArea = document.querySelector(`.js-player-info--p${i+1}__cash`);

      // obtenir le div equivalent a cet element
      let chooseDreamDiv = nameArea.parentElement;
      if (getComputedStyle(chooseDreamDiv).display !== 'none') {
        nameArea.textContent = players[i].name;
        nameArea.style['text-decoration-line'] = 'underline';
        jobArea.textContent = players[i].profession.name;
        salaryArea.textContent = players[i].profession.salary;
        initialCashArea.textContent = players[i].cash;
      }
    }
  }

  /* obtenir le nom et la couleur du joueur */
  static getPlayerNameAndColour(playerNum) {
    const playerName = document.querySelector(`.js-player-${playerNum}-setup__input`).value;
    const playColour = document.querySelector(`[name='player-${playerNum}-color-select']`).value;
    return { playerName, playColour };
  }

  /* retourner les valeurs pour instancier la partie; ces valeurs sont obtenus du formulaire de parametrage du jeu (game setup form) */
  static getPartyConstructorVals() {
    // Party(maxNumOfChildren, maxSmallDealAmt, minBigDealAmt, loanInterestPercent, duration, startTime)
    const maxNumOfChildren = parseInt(document.querySelector('.js-children-number-setup__input').value);
    const maxSmallDealAmt = parseInt(document.querySelector('.js-small-deal-setup__input').value);
    const minBigDealAmt = parseInt(document.querySelector('.js-big-deal-setup__input').value);
    const exitAmt = parseInt(document.querySelector('.js-exit-amount-setup__input').value);
    const loanInterestPercent = parseInt(document.querySelector('.js-loan-interest-percent-setup__input').value);
    const durationInputs = document.querySelectorAll('.js-duration-setup__input');
    let duration;
    for (const input of durationInputs) {
      // au moins un input sera coche
      if (input.checked) {
        duration = parseInt(input.value);
        break;
      }
    }
    // const date = new Date();
    // const startTime = `${date.getHours()}:${date.getMinutes()}`;
    return { maxNumOfChildren, maxSmallDealAmt, minBigDealAmt, loanInterestPercent, exitAmt, duration };
  }

  /* creer et inserer les marqueurs(pions) des joueurs dans le html */
  static createPlayerMarkers() {
    let initialTokensSpace = document.querySelector('.js-start-here-cell').children[1];

    for (let i = 0; i < Utils.getNumOfPlayers(); i++) {
      const { playerName, playColour } = Utils.getPlayerNameAndColour(i+1);
      let playerToken = document.createElement('div');
      // playerToken.setAttribute('data-token-player-num', `${i + 1}`);  // ajouter l'attribut data-token-player-num au "token"
      playerToken.dataset.bsToggle = "tooltip";
      playerToken.dataset.bsPlacement = "bottom";
      playerToken.title = playerName;
      playerToken.textContent = i + 1;
      playerToken.style.backgroundColor = playColour;
      playerToken.classList.add('player-token');
      playerToken.classList.add(`js-player-token--p${i+1}`);

      initialTokensSpace.appendChild(playerToken);
    }
  }

  /* obtenir le pion dun joueur */
  static getPlayerMarker(playerNum) {
    return document.querySelector(`.js-player-token--p${playerNum}`);
  }

  /* obtenir la case dans laquelle le pion du joueur se trouve */
  static getPlayerMarkerCellNumber(playerNum) {
    let markerCell = Utils.getPlayerMarker(playerNum).parentElement.parentElement;
    let markerCellNum = parseInt(markerCell.dataset.cellNumber);

    return markerCellNum;
  }

  /* inserer les box des joueurs dans le tableau de jeu */
  static insertPlayerBoxes() {
    let players = Utils.initialPlayersInfo();
    let playerRow = document.querySelector('.js-player-list-row');

    for (let i = 0; i < players.length; i++) {
      let playerBox = document.createElement('td');
      playerBox.textContent = players[i].name;
      playerBox.classList.add('player-list-row__cell');
      playerBox.setAttribute('data-box-player-num', `${i + 1}`);

      if (i === 0) {
        playerBox.classList.add('player-list-row__cell--active');
      }

      playerRow.appendChild(playerBox);
    }

  }

  /* initialiser les espaces du jeu au premier joueur */
  static initializeFirstPlayerSpots() {
    let playerTurn = document.querySelector('.js-turn-action__player');
    playerTurn.textContent = `${party.players[0].name}'s turn`;

  }

  /* obtenir un nombre aleatoire compris entre 1 et 6 inclusive */
  static getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  /* deplacer le pion du joueur dans la partie rat race */
  static movePlayerMarkerRR(playerNum, diceNumber) {
    // algorithm: remove token from previous position and place it as child of new position
    let currentCellNum = Utils.getPlayerMarkerCellNumber(playerNum);
    let newCellNum = (currentCellNum + diceNumber) % NUM_RAT_RACE_CELLS;
    // si on est ici => on avait (NUM_RAT_RACE_CELLS % NUM_RAT_RACE_CELLS) = 0.
    if (newCellNum === 0) {
      newCellNum = 1;
    }

    // obtenir la case rat race ayant pour numero newCellNum
    let newCell = document.querySelector(`[data-is-rr-cell='true'][data-cell-number='${newCellNum}']`);

    // deplacer(transporter) le pion du joueur
    // NOTE: le deplacement est fait par reference .
    newCell.children[1].appendChild(Utils.getPlayerMarker(playerNum));
  }

  /* obtenir le type despace dune case a travers son numero */
  /* section = {'rr', 'ft'} */
  static getSpaceType(cellNum, section) {
    if (section !== 'rr' && section !== 'ft') {
      alert("Function getSpaceType() in Utils.js has a problem, neither rr nor ft was passed.");
      console.error("Error !!!");
    }

    let cell = document.querySelector(`[data-is-${section}-cell=true][data-cell-number='${cellNum}']`);
    return cell.dataset.spaceName;
  }

  /* mettre le "marqueur du joueur actif" au joueur courant */
  static updateActivePlayerBox(currentPlayerNum, nextPlayerNum) {
    let currentPlayerBox = document.querySelector(`[data-box-player-num='${currentPlayerNum}']`);
    currentPlayerBox.classList.remove('player-list-row__cell--active');

    let nextPlayerBox = document.querySelector(`[data-box-player-num='${nextPlayerNum}']`);
    nextPlayerBox.classList.add('player-list-row__cell--active');
  }

  /* remettre le menu des actions a' son etat initial */
  static resetGameActionBox(nextPlayer) {
    let turnActionDiv = document.querySelector('.js-turn-action');
    let rollDiceButton = document.querySelector('.js-roll-dice-button');

    turnActionDiv.innerHTML = `
      <p class="h2 js-turn-action__player">${nextPlayer.name}'s turn</p><br>
      <p class="h3 turn-action__p turn-action__p--title js-turn-actionp__p--title">When you are ready, roll the dice and take your turn.</p>
      <p class="turn-action__p turn-action__p--description js-turn-action__p--description">Before you start your turn, review your financial statement. You may also  use this time to repay liabilities or borrow money.</p>
    `;
    turnActionDiv.appendChild(rollDiceButton);
  }

  static setGameActionBoxRR(space) {
    let turnActionPlayer = document.querySelector('.js-turn-action__player');
    let turnActionTitle = document.querySelector('.js-turn-action__p--title');
    let turnActionDescription = document.querySelector('.js-turn-action__p--description');
    let spaceColor = SPACE_BG_COLORS[space];

    if (space === "charity") {
      turnActionPlayer.remove();
      turnActionTitle.textContent = 'DONATE TO CHARITY';
      turnActionTitle.style.color = spaceColor;
      turnActionTitle.style.textAlign = 'center';
      // continue this, then for all (all easy) spaces.
    }
  }

  /* deplacer le pion du joueur dans la partie fast track */
  static movePlayerMarkerFT(playerNum, diceNumber) {

  }

}
