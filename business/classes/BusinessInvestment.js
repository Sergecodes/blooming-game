
export default class BusinessInvestment {
  constructor(name, description, downPayment, ROI, bought = false) {
    this.name = name;
    this.description = description;
    this.downPayment = downPayment;  // the cost of the investment
    this.ROI = ROI;  // return on investment
    this.bought = bought;

  }
}


// les investissements de la partie Fast Track
export const BUSINESS_INVESTMENTS = [
  // verify how ROI is implemented
  new BusinessInvestment('business 1', 'This is the first business', 100000, 200000),
  new BusinessInvestment('business 2', 'This is the second business', 900000, 1000000),
  new BusinessInvestment('business 3', 'This is the third business', 100000, 200000),

];
