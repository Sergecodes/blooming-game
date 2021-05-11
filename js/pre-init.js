// $(function () {
//
// });
// grippe aviaire (sort de ce corps)
import Profession from './classes/Profession';
import {
  getProfessions,
  generateAssets,
  generateJobSelectMenuOptions as genJobOptions,
  generateColorSelectMenuOptions as genColorOptions,

} from './utils';


(function () {
  insertProfessionAndColorOptions();
  generateAssets();

  let playerSelectOptions = document.getElementsByClassName("js-player-select__option");
  for (let i = 0; i < playerSelectOptions.length; i++) {
    let option = playerSelectOptions[i];
    option.addEventListener("click", onClickPlayerSelectOption);
  }

})();

/* fonction evoquee lorsque une option pour choisir le nombre de joueurs est clickee */
function onClickPlayerSelectOption(event) {
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
        let player = document.querySelector(`.player-${i}-setup`);
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

/* inserer les options pour les menus de selection du metier et de la couleur */
function insertProfessionAndColorOptions() {
  const professions = getProfessions();
  let jobSelectMenus = document.querySelectorAll('.js-job-select');
  jobSelectMenus.forEach(menu => {
    genJobOptions(menu);
  });

  let colorSelectMenus = document.querySelectorAll('.js-color-select');
  colorSelectMenus.forEach(menu => {
    genColorOptions(menu);
  });

}
