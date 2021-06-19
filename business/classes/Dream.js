import { DREAMS_COST } from '/ui/js/utils';

export default class Dream {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.cost = DREAMS_COST;
    // les joueurs qui ont "visites" ce reve
    this.visitors = [];
  }
}


// certains reves
export const DREAMS = [
  new Dream('dream 1', 'this is the first dream'),
  new Dream('dream 2', 'this is the second dream'),
  new Dream('dream 3', 'this is the third dream'),
  new Dream('dream 4', 'this is the forth dream'),
  new Dream('dream 5', 'this is the fifth dream'),
];
