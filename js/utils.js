/** Contient les fonctions d'utilites */
import Player from './classes/Player';
import { Profession } from './classes/Card';

export const SAVINGS_AMT = 10000;


/* creer un reve (l'inserer dans le html) */
export function createDream(dream, playerNum) {
  let dreamInfo = document.querySelector(`.js-dream-info--p${playerNum}`);
  dreamInfo.innerHTML = `<p class="dream-title">${dream.name}</p>
                        <p class="dream-description">${dream.description}</p>`
}

/* obtenir le nombre de joueurs dans la partie (a travers le html) */
function getNumOfPlayers() {
  let numPlayers = 0;
  const playerSetups = document.querySelector('.js-players-table').children;

  for (let i = 0; i < playerSetups.length; i++) {
    if (getComputedStyle(playerSetups[i]).display !== 'none') {
      numPlayers++;
    }
  }

  return numPlayers;
}

/* obtenir le nom et la couleur du joueur */
function getPlayerNameAndColour(playerNum) {
  const playerName = document.querySelector(`.js-player-${playerNum}-setup__input`).value;
  const playerColour = document.querySelector(`[name=player-${playerNum}-color-select]`).value;
  return { playerName, playerColour };
}

/* obtenir les reves des joueurs */
export function getPlayersDreams() {
  let dreams = [];
  let chooseDreamWrapper = document.querySelector('.js-choose-dream-wrapper');
  // TODO: implement

}

/* retourner les joueurs d'une partie et leurs informations initiales(nom, couleur, metier); mais son reve est encore indefini (null) */
export function initialPlayersInfo() {
  const numPlayers = getNumOfPlayers();
  let players = [];

  for (let i = 0; i < numPlayers; i++) {
    let nameAndColour = getPlayerNameAndColour(i+1);
    // le reve est initialement "null"
    players.push(new Player(nameAndColour.playerName, nameAndColour.playerColour, Profession.getRandomProfession(), null));
  }

  return players;
}

/* retourner les valeurs pour instancier la partie; ces valeurs sont obtenus du formulaire de parametrage du jeu (game setup form) */
export function getPartyConstructorVals() {
  // Party(maxNumOfChildren, maxSmallDealAmt, minBigDealAmt, loanInterestPercent, duration, startTime)
  const maxNumOfChildren = parseInt(document.querySelector('.js-children-number-setup__input').value);
  const maxSmallDealAmt = parseInt(document.querySelector('.js-small-deal-setup__input').value);
  const minBigDealAmt = parseInt(document.querySelector('.js-big-deal-setup__input').value);
  const loanInterestPercent = parseInt(document.querySelector('.js-loan-interest-percent-setup__input').value);
  const durationInputs = document.querySelectorAll('.js-duration-setup__input');
  let duration;
  for (const input of durationInputs) {
    // au moins un input sera coche'
    if (input.checked) {
      duration = parseInt(input.value);
      break;
    }
  }
  const date = new Date();
  const startTime = `${date.getHours()}:${date.getMinutes()}`;
  return { maxNumOfChildren, maxSmallDealAmt, minBigDealAmt, loanInterestPercent, duration, startTime };
}

/* creer les marqueurs(pions) des joueurs */
export function createPlayerMarkers() {
  let initialTokensSpace = document.querySelector('.js-start-here-cell').children[1];

  for (let i = 0; i < getNumOfPlayers(); i++) {
    let playerNameAndColour = getPlayerNameAndColour(i+1);
    let playerToken = document.createElement('div');
    playerToken.textContent = i + 1;
    playerToken.classList.add('player-token');

    initialTokensSpace.appendChild(playerToken);
    // playerToken.style.background =
    // style="background: rgba(0, 0, 0, 0) radial-gradient(circle, rgb(20, 232, 85) 0%, rgb(38, 85, 66) 55%, rgb(15, 66, 46) 97%) repeat scroll 0% 0%;"
  }
}

/* inserer les box des joueurs */
export function insertPlayerBoxes() {
  let playerRow = document.querySelector('.js-player-list-row');
  for (let i = 0; i < getNumOfPlayers(); i++) {
    let playerBox = document.createElement('td');
    playerBox.textContent = `Player ${i+1}`;
    playerBox.classList.add('player-list-row__cell');
    playerRow.appendChild(playerBox);
  }

}
