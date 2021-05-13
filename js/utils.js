import Profession from './classes/Profession';
import Asset from './classes/Asset';

const COLORS = ['red', 'blue', 'green', 'orange', 'white', 'pink', 'purple'];
const PROFESSIONS_AND_SALARIES = {
  'Docteur': 500000,
  'Ingenieur': 400000,
  'Enseignant': 300000,
  'Infirmier': 50000,
  'Policier': 60000,
};

/*
const ASSETS = [
  new Asset()
  {
    name:
    type:
    description:
    cost:
    owner:
  }
]
*/

/* retourne un tableau des instances de Profession disponible */
function getProfessions() {
  let professionsList = [];
  for (const entry in PROFESSIONS_AND_SALARIES) {
    professionsList.push(new Profession(entry, PROFESSIONS_AND_SALARIES[entry]));
  }

  return professionsList;
}

/* retourne un metier aleatoire de a liste des metiers */
export function randomProfession() {
  const professions = getProfessions(), n = professions.length;
  return professions[Math.floor(Math.random() * n)];
}

/* Generer la liste des atouts disponible */
export function generateAssets() {
  // initialement, il y a un asset dans div.assets-list (voir html)
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

/* retourner les valeurs pour instancier la partie */
export function getPartyConstructorVals() {
  // Party(maxNumOfChildren, maxSmallDealAmt, minBigDealAmt, loanInterestPercent, duration, startTime)
  const maxNumOfChildren = parseInt(document.querySelector('.js-children-number-setup__input').value);
  const maxSmallDealAmt = parseInt(document.querySelector('.js-small-deal-setup__input').value);
  const minBigDealAmt = parseInt(document.querySelector('.js-big-deal-setup__input').value);
  const loanInterestPercent = parseInt(document.querySelector('.js-loan-interest-percent-setup__input').value);
  const durationInputs = document.getElementsByClassName('js-duration-setup__input');
  let duration;
  for (let element of durationInputs) {
    // au moins un element sera coche'
    if (element.checked) {
      duration = parseInt(element.value);
      break;
    }
  }
  const date = new Date();
  const startTime = `${date.getHours()}:${date.getMinutes()}`;
  return { maxNumOfChildren, maxSmallDealAmt, minBigDealAmt, loanInterestPercent, duration, startTime };
}
