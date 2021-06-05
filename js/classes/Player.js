
const SAVINGS_AMT = 10000;

export default class Player {
  // monthlyCashFlow is also the player's paycheck
  constructor(name, playColour, profession, dream, currentLevel = "rat race") {
    this.name = name;
    this.playColour = playColour;
    this.profession = profession;
    this.cash = profession.monthlySalary + SAVINGS_AMT;
    this.dream = dream;
    this.assets = [];
    // this.expenses = [];
    this.currentLevel = currentLevel;  // currentLevel = {"rat race", "fast track"}.
    // nb income statement and balance sheet figures are not applicable to players in the fast track.
  }
}
