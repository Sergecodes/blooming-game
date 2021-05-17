import Profession from './classes/Profession';
import {
  generateAssets,

} from './utils';
import {
  onChangeSmallDealAmt,
  onClickPlayerSelectOption,
  onClickStartButton,
  onChooseDream,
  createDream,
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

  // some default dreams
  const dreams = [
    {
      name: 'dream one',
      description: 'this is the first dream',
      cost: '10',
    },
    {
      name: 'dream two',
      description: 'this is the second dream',
      cost: '20',
    },
    {
      name: 'dream three',
      description: 'this is the third dream',
      cost: '30',
    },
    {
      name: 'dream four',
      description: 'this is the fourth dream',
      cost: '40',
    },
  ];
  createDream(dreams[0]);
  onChooseDream(dreams);
})();
