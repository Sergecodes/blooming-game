
/* type = {small, big}, asset: Asset */
export default class Deal {
  constructor(type, cost, asset) {
    this.type = type;
    this.cost = cost;
    this.asset = asset;
  }
}
