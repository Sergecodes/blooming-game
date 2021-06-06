import { DREAMS } from './classes/Dream';
import {
  // generateAssets,
  createDream,

} from './utils';
import {
  onChangeMaxSmallDealAmt,
  onClickPlayerSelectOption,
  onCompleteInitialSetup,
  onChangeDream,
  onStartGame,

} from './event-handlers';


(function () {
  // generateAssets();

  let smallDealInput = document.querySelector('.js-small-deal-setup__input');
  smallDealInput.addEventListener('change', onChangeMaxSmallDealAmt);

  let playerSelectOptions = document.querySelectorAll(".js-player-select__option");
  for (let option of playerSelectOptions) {
    option.addEventListener("click", onClickPlayerSelectOption);
  }

  let gameSetupForm = document.querySelector('.js-game-setup-form');
  gameSetupForm.addEventListener('submit', onCompleteInitialSetup);

  let startButton = document.querySelector('.js-start-button');
  startButton.addEventListener('click', onStartGame);

  // inserer les reves initiales dans le html
  createDream(DREAMS[0], 1);  // player 1
  createDream(DREAMS[0], 2);  // player 2
  createDream(DREAMS[0], 3);  // player 3

  // ajouter l'evenement a effectuer lorsqu'un joueur parcour les reves
  onChangeDream();


})();
