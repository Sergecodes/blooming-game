import { SAVINGS_AMT } from '../utils';

export default class Player {
  // monthlyCashFlow is also the player's paycheck
  constructor(name, playColour, profession, dream, currentLevel = "rat race") {
    this.name = name;
    this.playColour = playColour;
    this.profession = profession;
    this.cash = profession.salary + SAVINGS_AMT;
    this.dream = dream;
    this.assets = [];
    // this.expenses = [];
    this.currentLevel = currentLevel;  // currentLevel = {"rat race", "fast track"}.
    // nb income statement and balance sheet figures are not applicable to players in the fast track.
  }
}
