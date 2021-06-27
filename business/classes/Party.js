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

  /* retourne le nombre de joueurs de la partie */
  get numPlayers() {
    return this.players.length;
  }

  /* retourne le prochain joueur qui devrait jouer */
  get nextPlayer() {
    let nextPlayerNum;

    if (this.currentPlayer !== null) {
      nextPlayerNum = (this.currentPlayer.number + 1) % this.numPlayers;
      // si cette condition est verifiee alors le joueur courant est le joueur n-1
      if (nextPlayerNum === 0)
        return this.players[this.numPlayers - 1];  // le dernier joueur
      else
        return this.players[nextPlayerNum - 1];

    } else {
      // on ne doit jamais arrive' ici !
      console.log("Current player is null !!!");
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
