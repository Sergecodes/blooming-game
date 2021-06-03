
export default class Dream {
  constructor(name, description, cost, buyers = []) {
    this.name = name;
    this.description = description;
    this.cost = cost;
    // players that have bought this dream
    this.buyers = buyers;
  }
}


// certains reves
export const DREAMS = [
  new Dream('dream 1', 'this is the first dream', 1000000),
  new Dream('dream 2', 'this is the second dream', 1000000),
  new Dream('dream 3', 'this is the third dream', 1000000),
  new Dream('dream 4', 'this is the forth dream', 1000000),
  new Dream('dream 5', 'this is the fifth dream', 1000000),
];
