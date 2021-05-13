import Party from './classes/Party';
import Player from './classes/Player';
import {
  getPartyConstructorVals,
  randomProfession,

} from './utils';

/* evoquee lorsque la valeur du montant max de small deal est modifiee */
export function onSmallDealAmtChange(event) {
  const newMinBigDealAmt = 10 * parseInt(event.target.value);
  let bigDealInput = document.querySelector('.js-big-deal-setup__input');
  bigDealInput.min = newMinBigDealAmt;
  bigDealInput.value = newMinBigDealAmt;
}

/* evoquee lorsque une option pour choisir le nombre de joueurs est clickee */
export function onClickPlayerSelectOption(event) {
  const newNumOfPlayers = parseInt(event.target.value, 10);
  let playersTable = document.querySelector('.js-players-table');

  let oldNumOfPlayers = 0;
  for (let player of playersTable.children) {
    const styles = window.getComputedStyle(player);
    if (styles.getPropertyValue('display') === 'block')
      oldNumOfPlayers++;
  }

  if (oldNumOfPlayers === newNumOfPlayers) {
    return;

  } else if (newNumOfPlayers > oldNumOfPlayers) {
      for (let i = 2; i <= newNumOfPlayers; i++) {
        let player = document.querySelector(`.js-player-${i}-setup`);
        player.style.display = 'block';
      }

    // ou tout simplement else{...}
  } else if (oldNumOfPlayers > newNumOfPlayers) {
      for (let i = oldNumOfPlayers; i > newNumOfPlayers; i--) {
        // i-1 car l'indice va de 0 a length-1
        playersTable.children[i-1].style.display = 'none';
      }
  }

}

/* evoquee lorsque le bouton Commencer est clicke' (quand le formulaire est soumis) */
export function onClickStartButton(event) {
  let form = document.forms["gameSetup"];
  for (let input of form.elements) {
    if (input.value === '') {
      return false;
    }
    // ajouter les conditions aux autres elements du formulaire
    // ...
  }

  // pour ne pas soumettre le formulaire et recharger la page
  event.preventDefault();
  let setupWrapper = document.querySelector('.js-setup-forms-wrapper');
  setupWrapper.style.display = 'none';

  // Party(maxNumOfChildren, maxSmallDealAmt, minLargeDealAmt, loanInterestPercent, duration, startTime)
  // obj: { maxNumOfChildren, maxSmallDealAmt, minBigDealAmt, loanInterestPercent, duration, startTime };
  let players = [];
  const obj = getPartyConstructorVals(), savingsAmount = 10000;
  const playerInputs = document.getElementsByClassName('js-players-table__input');
  for (let input of playerInputs) {
    let profession = randomProfession();
    // Player(name, profession, monthlyCashFlow)
    players.push(new Player(input.value, profession, profession.monthlySalary));
  }

  // TODO:  create some dreams, initialize assets array

  // let party = new Party(
  //   obj.maxNumOfChildren,
  //   obj.maxSmallDealAmt,
  //   obj.minBigDealAmt,
  //   obj.loanInterestPercent,
  //   obj.duration,
  //   obj.startTime
  // );
  // party.players = players;
  // party.assets = assets;
  // party.dreams = dreams;


}
