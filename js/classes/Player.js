
const SAVINGS_AMT = 10000;

export default class Player {
  // monthlyCashFlow is also the player's paycheck
  constructor(name, profession, monthlyCashFlow, dream, currentLevel = "rat race") {
    this.name = name;
    this.profession = profession;
    this.cash = monthlyCashFlow + SAVINGS_AMT;
    this.dream = dream;
    this.assets = [];
    this.expenses = [];
    this.currentLevel = currentLevel;  // currentLevel = {"rat race", "fast track"}.
    // nb income statement and balance sheet figures are not applicable to players in the fast track.
  }
}
