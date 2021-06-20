/**
  * duration: game length in minutes, max is 2hours(120mins)
 */


export default class Party {
  constructor(maxNumOfChildren, maxSmallDealAmt, minBigDealAmt, loanInterestPercent, exitAmt, duration) {
    this.maxNumOfChildren = maxNumOfChildren;
    this.maxSmallDealAmt = maxSmallDealAmt;
    this.minBigDealAmt = minBigDealAmt;
    this.loanInterestPercent = loanInterestPercent;
    // si le temps de la partie est finie le vainqueur sera celui qui aura atteint ce montant
    this.exitAmt = exitAmt;
    this.duration = duration;
    this.dreams = [];  // les reves disponibles dans la partie
    this.players = [];
    this.assets = [];
    this.professions = [];
    this.doodads = [];
  }

  /* retourne le nombre de joueurs de la partie */
  get numPlayers() {
    return this.players.length;
  }

  // get remainingTime() {
  //
  // }
}
