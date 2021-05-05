import Profession from './classes/Profession';


const professionsAndSalaries = {
  'Docteur': 500000,
  'Ingenieur': 400000,
  'Enseignant': 300000,
  'Infirmier': 50000,
  'Policier': 60000,
};
const colors = [
  'red', 'blue', 'green',
  'orange', 'white', 'pink',
  'purple'
];

export function getProfessions() {
  let professionsList = [];
  for (const entry in professionsAndSalaries) {
    professionsList.push(new Profession(entry, professionsAndSalaries[entry]));
  }

  return professionsList;
}

/* Generer les options pour le menu de selection des metiers */
export function generateJobSelectMenuOptions(jobSelectMenu) {
  const professions = getProfessions();
  let defaultOption = document.createElement('option');
  defaultOption.value = "";
  defaultOption.textContent = 'Metier aleatoire';
  defaultOption.selected = true;

  jobSelectMenu.appendChild(defaultOption);

  for (let profession of professions) {
    let option = document.createElement('option');
    let optionContent = `${profession.name} (${profession.monthlySalary} CFA)`;
    // option.classList.add('job-select__option');
    option.value = optionContent;
    option.textContent = optionContent;
    jobSelectMenu.appendChild(option);
  }
}

/* Generer les options pour le menu de selection des couleurs */
export function generateColorSelectMenuOptions(colorSelectMenu) {
  let defaultOption = document.createElement('option');
  defaultOption.value = "";
  defaultOption.textContent = 'Couleur aleatoire';
  defaultOption.selected = true;

  colorSelectMenu.appendChild(defaultOption);

  for (let color of colors) {
    let option = document.createElement('option');
    // option.classList.add('color-select__option');
    option.value = color;
    option.textContent = color;
    colorSelectMenu.appendChild(option);
  }
}
