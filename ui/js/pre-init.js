import { DREAMS } from '/business/classes/Dream';
import Utils from './classes/Utils';
import EventHandlers from './classes/EventHandlers';


(function () {
  // generateAssets();
  // setTimeout(function() {
  //   alert('hello');
  // }, 5000);

  let smallDealInput = document.querySelector('.js-small-deal-setup__input');
  smallDealInput.addEventListener('change', EventHandlers.onChangeMaxSmallDealAmt);

  let playerSelectOptions = document.querySelectorAll(".js-player-select__option");
  for (let option of playerSelectOptions) {
    option.addEventListener("click", EventHandlers.onClickPlayerSelectOption);
  }

  let gameSetupForm = document.querySelector('.js-game-setup-form');
  gameSetupForm.addEventListener('submit', EventHandlers.onCompleteInitialSetup);

  let startButton = document.querySelector('.js-start-button');
  startButton.addEventListener('click', EventHandlers.onStartGame);

  // inserer les reves initiales dans le html
  Utils.createDream(DREAMS[0], 1);  // player 1
  Utils.createDream(DREAMS[0], 2);  // player 2
  Utils.createDream(DREAMS[0], 3);  // player 3

  // ajouter l'evenement a effectuer lorsqu'un joueur parcourt les reves
  EventHandlers.onChangeDream();

  // Action buttons...
  let rollDiceButton = document.querySelector('.js-roll-dice-button');
  rollDiceButton.addEventListener('click', EventHandlers.onRollDice);

  let endTurnButton = document.querySelector('.js-end-turn-button');
  endTurnButton.addEventListener('click', EventHandlers.onEndPlayTurn);

  let passButtons = document.querySelectorAll('.js-pass-button');
  for (let passButton of passButtons) {
    passButton.addEventListener('click', EventHandlers.onClickDoneButton);
  }

  let doneButtons = document.querySelectorAll('.js-done-button');
  for (let doneButton of doneButtons) {
    doneButton.addEventListener('click', EventHandlers.onClickDoneButton);
  }



})();
