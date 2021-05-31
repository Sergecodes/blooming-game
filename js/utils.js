/** Contient les constantes importantes et fonctions d'utilites */

import { Profession } from './classes/Card';
import Asset from './classes/Asset';

const PROFESSIONS_AND_SALARIES = {
  'Docteur': 500000,
  'Ingenieur': 400000,
  'Enseignant': 300000,
  'Infirmier': 50000,
  'Policier': 60000,
};

export const SAVINGS_AMT = 10000;

/* retourne le nombre de joueurs de la partie */
export function numPlayers() {
  // TODO: implement
}

// les investissements de la partie Fast Track
export const BUSINESS_INVESTMENTS = [
  {
    title: 'business 1',
    bought: false,
    downPayment: 100000,  // the cost of the investment
    description: 'This is the first business'
  },
  {
    title: 'business 2',
    bought: false,
    downPayment: 200000,
    description: 'This is the first business'
  },
  {
    title: 'business 3',
    bought: false,
    downPayment: 300000,
    description: 'This is the first business'
  },
];

// certains reves
export const DREAMS = [
  {
    name: 'dream one',
    description: 'this is the first dream',
    cost: 10,
    buyers: []   // liste des joueurs qui ont achete ce reve
  },
  {
    name: 'dream two',
    description: 'this is the second dream',
    cost: 20,
    buyers: []
  },
  {
    name: 'dream three',
    description: 'this is the third dream',
    cost: 30,
    buyers: []
  },
  {
    name: 'dream four',
    description: 'this is the fourth dream',
    cost: 40,
    buyers: []
  },
];

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

/* pour creer un reve (l'inserer dans le html) */
export function createDream(dream) {
  let dreamContent = document.querySelector(".dream-block");
  dreamContent.innerHTML = `<p class="dream-title">${dream.name}</p>
                            <p class="dream-description">${dream.description}</p>`;
}

/* Generer la liste des atouts disponible */
export function generateAssets() {
  // initialement, il y a un asset dans div.assets-list (voir html)
  let assetsList = document.querySelector('.js-assets-list');
  const ASSET_TYPES = [
    'Small real estate', 'Big real estate', "Short-term investments",
    "Cash", 'Stocks', "Mutuals", "Cars & Trucks", "Inventory",
  ];
  // HTML Structure
  /* <div class="form-check">
    <label>
      <span class="form-check-label">nomAtout</span>
      <input class="form-check-input" type="checkbox">
    </label>
  </div>
  */
  for (const assetName of ASSET_TYPES) {
    let div = document.createElement('div');
    div.classList.add('form-check');

    let label = document.createElement('label');
    let span = document.createElement('span');
    span.classList.add('form-check-label');  // classe bootstrap
    span.textContent = assetName;
    label.appendChild(span);

    let input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('form-check-input');   // classe bootstrap
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
  for (const input of durationInputs) {
    // au moins un input sera coche'
    if (input.checked) {
      duration = parseInt(input.value);
      break;
    }
  }
  const date = new Date();
  const startTime = `${date.getHours()}:${date.getMinutes()}`;
  return { maxNumOfChildren, maxSmallDealAmt, minBigDealAmt, loanInterestPercent, duration, startTime };
}
