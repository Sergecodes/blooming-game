// $(function () {
//
// });
// grippe aviaire (sort de ce corps)
import Profession from './classes/Profession';
import {
  getProfessions,
  generateJobSelectMenuOptions as genJobOptions,
  generateColorSelectMenuOptions as genColorOptions,

} from './utils';


(function () {
  let playerSelectOptions = document.getElementsByClassName("js-player-select__option");

  for (let i = 0; i < playerSelectOptions.length; i++) {
    let option = playerSelectOptions[i];
    option.addEventListener("click", onClickOption);
  }

  insertP1ProfessionAndColorOptions();

})();


function onClickOption(event) {
  const numOfPlayers = parseInt(event.target.value, 10);
  let playersTable = document.querySelector('.js-players-table');
  if (playersTable.childElementCount === numOfPlayers)
    return;

  // retire d'abord tous les joueurs
  playersTable.textContent = '';

  // reinsere les joueurs en fonction du nombre de joueurs
  for (let i = 1; i <= numOfPlayers; i++) {
    const inputVal = `Player ${i}`;
    let label = document.createElement('label');
    label.style.display = "block";
    label.classList.add(`player-${i}-label`);

    let span = document.createElement('span');
    span.classList.add('player-label__label');
    span.textContent = inputVal + ':';
    label.appendChild(span);

    let input = document.createElement('input');
    input.type = "text", input.value = inputVal;
    label.appendChild(input);

    let jobSelect = document.createElement('select');
    jobSelect.classList.add('job-select');
    genJobOptions(jobSelect);
    label.appendChild(jobSelect);

    let colorSelect = document.createElement('select');
    colorSelect.classList.add('color-select');
    genColorOptions(colorSelect);
    label.appendChild(colorSelect);
    // let br = document.createElement('br');
    // label.append(br);
    playersTable.appendChild(label);
  }

}

/* inserer les options pour les menus de selection du metier et de la couleur (pour le premieur joeur - joueur initial) */
function insertP1ProfessionAndColorOptions() {
  const professions = getProfessions();
  let p1JobSelectMenu = document.querySelector('.js-job-select');
  genJobOptions(p1JobSelectMenu);

  let p1ColorSelectMenu = document.querySelector('.js-color-select');
  genColorOptions(p1ColorSelectMenu);
}
