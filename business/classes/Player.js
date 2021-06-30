import { SAVINGS_AMT } from '/ui/js/classes/Utils';
import { DREAMS } from './Dream';

export default class Player {
  // monthlyCashFlow is also the player's paycheck
  constructor(number, name, playColour, currentSection = "rat race", dream = DREAMS[0]) {
    this.number = number;
    this.name = name;
    this.playColour = playColour;
    this.currentSection = currentSection;
    this.dream = dream;
  }

  drawCard(card) {

  }
}


export class RatRacePlayer extends Player {
  constructor(number, name, playColour, profession) {
    super(number, name, playColour);
    this.profession = profession;
    this.cash = profession.salary + SAVINGS_AMT;
    this.assets = [];
  }
}


export class FastTrackPlayer extends Player {
  // nb income statement and balance sheet figures are not applicable to players in the fast track.
  constructor(ratRacePlayer) {
    super(ratRacePlayer.number, ratRacePlayer.name, ratRacePlayer.playColour, "fast track");
    this.ratRacePlayer = ratRacePlayer;
    this.investments = [];  // les investissements du joueur
  }

  // property
  // get sumInvestmentsROI()
}
