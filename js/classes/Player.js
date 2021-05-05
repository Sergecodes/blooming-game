import Party from './Party';


// player's profession is randomly selected
export default class Player {
  constructor(pseudonym, playColour, profession, monthlyCashFlow, savingsAmount) {
    this.id = Party.getNewPlayerId();
    this.pseudonym = pseudonym;
    this.playColour = playColour;
    this.profession = profession;
    this.savingsAmount = savingsAmount;
    this.assets = [];
    this.expenses = [];

    this.cash = 0;
  }
}
