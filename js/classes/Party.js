

/**
  * duration: game length in minutes, max is 2hours(120mins)
 */
export default class Party {
  constructor(maxNumOfChildren, maxSmallDealAmt, minBigDealAmt, loanInterestPercent, duration, startTime) {
    this.maxNumOfChildren = maxNumOfChildren;
    this.maxSmallDealAmt = maxSmallDealAmt;
    this.minBigDealAmt = minBigDealAmt;
    this.loanInterestPercent = loanInterestPercent;
    this.duration = duration;
    this.startTime = startTime;
    this.dreams = [];
    this.players = [];
    this.assets = [];
    this.expenses = [];
    this.professions = [];
  }

  /* retourne le nombre de joueurs de la partie */
  get numPlayers() {
    return this.players.length;
  }

  // get remainingTime() {
  //
  // }

}
