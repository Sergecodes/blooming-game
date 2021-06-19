import { SAVINGS_AMT } from '/ui/js/utils';

export default class Player {
  // monthlyCashFlow is also the player's paycheck
  constructor(name, playColour, profession) {
    this.name = name;
    this.playColour = playColour;
    this.profession = profession;
  }
}


export class RatRacePlayer extends Player {
  constructor(name, playColour, profession) {
    super(name, playColour, profession);
    this.cash = profession.salary + SAVINGS_AMT;
    this.assets = [];
  }
}


export class FastTrackPlayer extends Player {
  // nb income statement and balance sheet figures are not applicable to players in the fast track.
  constructor(ratRacePlayer, name, playColour, profession, dream) {
    super(name, playColour, profession);
    this.ratRacePlayer = ratRacePlayer;
    this.dream = dream;
    this.investments = [];  // les investissements du joueur
  }

  // property
  // get sumInvestmentsROI()
}
