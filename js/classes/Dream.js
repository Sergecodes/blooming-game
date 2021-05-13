
export default class Dream {
  constructor(name, description, cost) {
    this.name = name;
    this.description = description;
    this.cost = cost;
    // players that have bought this dream
    this.buyers = [];
  }
}
