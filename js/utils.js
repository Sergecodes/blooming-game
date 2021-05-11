import Profession from './classes/Profession';
import Asset from './classes/Asset';
import Party from './classes/Party';

const COLORS = ['red', 'blue', 'green', 'orange', 'white', 'pink', 'purple'];
const PROFESSIONS_AND_SALARIES = {
  'Docteur': 500000,
  'Ingenieur': 400000,
  'Enseignant': 300000,
  'Infirmier': 50000,
  'Policier': 60000,
};

// const ASSETS = [
//   new Asset()
//   {
//     name:
//     type:
//     description:
//     cost:
//     owner:
//   }
// ]

export function getProfessions() {
  let professionsList = [];
  for (const entry in PROFESSIONS_AND_SALARIES) {
    professionsList.push(new Profession(entry, PROFESSIONS_AND_SALARIES[entry]));
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

  for (let color of COLORS) {
    let option = document.createElement('option');
    // option.classList.add('color-select__option');
    option.value = color;
    option.textContent = color;
    colorSelectMenu.appendChild(option);
  }
}

/* Generer la liste des atouts disponible */
export function generateAssets() {
  // initially, there is one asset in div.assets-list (see html)
  let assetsList = document.querySelector('.js-assets-list');
  const ASSET_NAMES = [
    'Small real estate', 'Big real estate', "Short-term investments",
    "Cash", 'Stocks', "Mutuals", "Cars & Trucks", "Inventory",
  ];
  // HTML Structure
  /* <div class="form-check">
    <label>
      <span class="form-check-label">Coins</span>
      <input class="form-check-input" type="checkbox">
    </label>
  </div>
  */
  for (let assetName of ASSET_NAMES) {
    let div = document.createElement('div');
    div.classList.add('form-check');

    let label = document.createElement('label');
    let span = document.createElement('span');
    span.classList.add('form-check-label');
    span.textContent = assetName;
    label.appendChild(span);

    let input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('form-check-input');
    label.appendChild(input);
    div.appendChild(label);
    assetsList.append(div);
  }

}

// Current assets: cash, accounts receivable, inventory(equipment), short-term investments, prepaid expenses
// Fixed assets: cars and trucks, land, furniture, buildings, machinery
//
// => small real estate, big real estate, stocks, mutuals, cars & trucks, furniture, limited partnership, companies

export function setMinBigDealAmount(form) {
  form.maxSmallDeal.value && form.maxSmallDeal.value > 0 ? form.minBigDeal.value = (form.maxSmallDeal.value * 1.5) : form.minBigDeal.value = form.maxSmallDeal.value
}