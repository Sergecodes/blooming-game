
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

const SMALL_DEALS = [
  // TODO: set small deal amount based on minimum small deal amount which has to be in party...
  new Opportunity('small', 5000, )

];

const BIG_DEALS = [

];

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

  /* retourne un metier aleatoire depuis la liste des metiers */
  static getRandomProfession() {
    let n = PROFESSIONS.length;
    return PROFESSIONS[Math.floor(Math.random() * n)];
  }
}

export const PROFESSIONS = [
  new Profession('Doctor', 900000),
  new Profession('Engineer', 800000),
  new Profession('Teacher', 300000),
  new Profession('Police officer', 100000),
  new Profession('Nurse', 90000),
];

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
