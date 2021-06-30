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
    // le joueur qui doit jouer(le joeur a' qui le tour appartient)
    this.currentPlayer = null;
  }

  /* retourne le joueur qui vient de jouer */
  get previousPlayer() {
    let prevPlayerNum;

    if (this.currentPlayer !== null) {
      let currentPlayerNum = this.currentPlayer.number;
      prevPlayerNum = (currentPlayerNum === 1) ? this.players.length : currentPlayerNum - 1;
      return this.players[prevPlayerNum - 1];

    } else {
      // on ne doit jamais arrive' ici !
      console.error("Current player is null !!!");
      console.error("This shouldn't be printed !");
    }
  }

  /* retourne le prochain joueur qui devrait jouer */
  get nextPlayer() {
    let nextPlayerNum;

    if (this.currentPlayer !== null) {
      let currentPlayerNum = this.currentPlayer.number;
      nextPlayerNum = (currentPlayerNum === this.players.length) ? 1 : currentPlayerNum + 1;
      return this.players[nextPlayerNum - 1];

    } else {
      // on ne doit jamais arrive' ici !
      console.error("Current player is null !!!");
      console.error("This shouldn't be printed !");
    }
  }

  /* pointer au prochain joueur */
  shiftToNextPlayer() {
    this.currentPlayer = this.nextPlayer;
  }
  
  // get remainingTime() {
  //
  // }
}
