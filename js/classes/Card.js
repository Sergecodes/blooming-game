
/* Contient la definition des cartes. Market card, Doodad, Opportunity(SmallDeal, BigDeal) */
/* Profession card, Congratulations, Editor */

class Card {
  constructor(type) {
    // le type de carte ex Market, Doodad, Opportunity, Profession, Congratulations, Editor, etc..
    this.type = type;
  }
}

/* dealType = {small, big}, asset: Asset */
export class Opportunity extends Card {
  constructor(dealType, cost, asset) {
    super("opportunity");
    this.dealType = dealType;
    this.cost = cost;
    this.asset = asset;
  }
}

export class Market extends Card {
  constructor(asset) {
    super("market");
    this.asset = asset;
  }
}

/* description may be null */
export class Doodad extends Card  {
  constructor(name, cost, description) {
    super("doodad");
    this.name = name;
    this.cost = cost;
    this.description = description;
  }
}

export class Profession extends Card {
  constructor(name, monthlySalary) {
    super("profession");
    this.name = name;
    this.monthlySalary = monthlySalary;
  }
}

export class Congratulations extends Card {
  constructor() {
    super("congratulations");
  }
}

export class Editor extends Card {
  constructor() {
    super("editor");
  }
}
