

/**
  * duration: game length in minutes, max is 2hours(120mins)
 */
export default class Party {
  contructor(maxNumOfChildrenPerPlayer, maxSmallDealAmount, minLargeDealAmount, loanInterestPercentage, duration) {
    this.maxNumOfChildrenPerPlayer = maxNumOfChildrenPerPlayer;
    this.maxSmallDealAmount = maxSmallDealAmount;
    this.minLargeDealAmount = minLargeDealAmount;
    this.loanInterestPercentage = loanInterestPercentage;
    this.duration = duration;
    this.players = [];
    this.assets = [];
    this.expenses = [];
    this.startTime = null;  // when "Start Game" button is clicked, set this variable.
  }

  /** Retourne un id pour un nouveau joueur */
  static getNewPlayerId() {
    return this.players.length + 1;
  }


}
