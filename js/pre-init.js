import Profession from './classes/Profession';
import {
  generateAssets,
  createDream,
  DREAMS,

} from './utils';
import {
  onChangeSmallDealAmt,
  onClickPlayerSelectOption,
  onClickStartButton,
  onChangeDream,

} from './event-handlers';


(function () {
  generateAssets();

  let smallDealInput = document.querySelector('.js-small-deal-setup__input');
  smallDealInput.addEventListener('change', onChangeSmallDealAmt);

  let playerSelectOptions = document.getElementsByClassName("js-player-select__option");
  for (let i = 0; i < playerSelectOptions.length; i++) {
    let option = playerSelectOptions[i];
    option.addEventListener("click", onClickPlayerSelectOption);
  }

  let gameSetupForm = document.querySelector('.js-game-setup-form');
  gameSetupForm.addEventListener('submit', onClickStartButton);

  // inserer le reve initial dans le html
  createDream(DREAMS[0]);
  // ajouter l'evenement a effectuer lorsqu'un joueur parcour les reves
  onChangeDream();

})();
