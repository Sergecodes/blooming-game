
/* owner: Player, type = {Real Estate/Business, Stocks/Funds}, owner may be null */
class Asset {
  constructor(name, type, description, cost, owner) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.cost = cost;
    this.owner = owner;
  }
}
