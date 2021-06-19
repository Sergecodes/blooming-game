
/* owner: Player, type = {Real Estate/Business, Stocks/Funds}, owner may be null */
export default class Asset {
  constructor(name, type, description, cost, owner) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.owner = owner;
    this.cost = cost;
  }
}

export const ASSETS = [

];
