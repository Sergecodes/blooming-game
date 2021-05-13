
const SAVINGS_AMT = 10000;

export default class Player {
  // monthlyCashFlow is also the player's paycheck
  constructor(name, profession, monthlyCashFlow) {
    this.name = name;
    this.profession = profession;
    this.cash = monthlyCashFlow + SAVINGS_AMT;
    this.assets = [];
    this.expenses = [];
  }
}
