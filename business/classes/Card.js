
/* Contient la definition des cartes. Market card, Doodad, Opportunity(SmallDeal, BigDeal) */
/* Profession card, Congratulations, Editor */

class Card {
  constructor(nom, description) {
    // le nom de carte ex Market, Doodad, Opportunity, Profession, Congratulations, Editor, etc..
    this.nom = nom;
    this.description = description;
  }
}

/* dealType = {small, big}, asset: Asset */
export class Opportunity extends Card {
  constructor(asset) {
    super("opportunity", "description");
    this.asset = asset;
  }
}

export class SmallDeal extends Opportunity {
  constructor(asset) {
    super(asset);
  }
}

export class BigDeal extends Opportunity {
  constructor(asset) {
    super(asset);
  }
}

export const SMALL_DEALS = [
  // TODO: set small deal amount based on minimum small deal amount which has to be in party...
  // new Opportunity('small', 5000, )

];

export const BIG_DEALS = [

];

export class Market extends Card {
  constructor(asset) {
    super("market", "description..");
    this.asset = asset;
  }
}

/* description may be null */
export class Doodad extends Card  {
  constructor(name, cost, description) {
    super("doodad", "description");
    this.name = name;
    this.cost = cost;
    // this.description = description;
  }
}

export class Congratulations extends Card {
  constructor() {
    super("congratulations", "description");
  }
}

export class Editor extends Card {
  constructor() {
    super("editor");
  }
}
