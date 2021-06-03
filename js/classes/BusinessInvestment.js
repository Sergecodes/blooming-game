
export default class BusinessInvestment {
  constructor(name, description, downPayment, bought = false) {
    this.name = name;
    this.description = description;
    this.downPayment = downPayment;  // the cost of the investment
    this.bought = bought;
  }
}


// les investissements de la partie Fast Track
export const BUSINESS_INVESTMENTS = [
  new BusinessInvestment('business 1', 'This is the first business', 100000),
  new BusinessInvestment('business 2', 'This is the second business', 900000),
  new BusinessInvestment('business 3', 'This is the third business', 100000),
  
];
