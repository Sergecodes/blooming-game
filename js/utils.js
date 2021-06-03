/** Contient les fonctions d'utilites */

export const SAVINGS_AMT = 10000;


/* creer un reve (l'inserer dans le html) */
export function createDream(dream, playerNum) {
  let dreamInfo = document.querySelector(`.js-dream-info--p${playerNum}`);
  dreamInfo.innerHTML = `<p class="dream-title">${dream.name}</p>
                        <p class="dream-description">${dream.description}</p>`
}

/* Generer la liste des atouts disponible */
export function generateAssets() {
  // initialement, il y a un asset dans div.assets-list (voir html)
  let assetsList = document.querySelector('.js-assets-list');
  const ASSET_TYPES = [
    'Small real estate', 'Big real estate', "Short-term investments",
    'Stocks', "Mutuals", "Cars & Trucks", "Inventory",
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
