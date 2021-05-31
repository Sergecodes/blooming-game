import { Profession } from './classes/Card';
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
  onChooseDream,


} from './event-handlers';


(function () {
  generateAssets();

  let smallDealInput = document.querySelector('.js-small-deal-setup__input');
  smallDealInput.addEventListener('change', onChangeSmallDealAmt);

  let playerSelectOptions = document.querySelectorAll(".js-player-select__option");
  for (let i = 0; i < playerSelectOptions.length; i++) {
    let option = playerSelectOptions[i];
    option.addEventListener("click", onClickPlayerSelectOption);
  }

  let gameSetupForm = document.querySelector('.js-game-setup-form');
  gameSetupForm.addEventListener('submit', onClickStartButton);

  let chooseDreamForms = document.querySelectorAll('.js-choose-dream-form');
  for (let i = 0; i < chooseDreamForms.length; i++) {
    chooseDreamForms[i].addEventListener('submit', onChooseDream);
  }

  // inserer le reve initial dans le html
  createDream(DREAMS[0]);
  // ajouter l'evenement a effectuer lorsqu'un joueur parcour les reves
  onChangeDream();

  // initialiser tous les tooltips de bootstrap
  let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });

})();
