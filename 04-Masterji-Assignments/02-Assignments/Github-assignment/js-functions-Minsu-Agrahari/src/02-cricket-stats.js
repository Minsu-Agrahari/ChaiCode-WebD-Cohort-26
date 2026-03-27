/**
 * 🏏 Cricket Player Stats Dashboard
 *
 * IPL ka stats dashboard bana raha hai tu! Har function ARROW FUNCTION
 * hona chahiye (const fn = () => ...). Regular function declarations
 * mat use karna — arrow functions ki practice karna hai!
 *
 * Functions (sab arrow functions honge):
 *
 *   1. calcStrikeRate(runs, balls)
 *      - Strike rate = (runs / balls) * 100, rounded to 2 decimal places
 *      - Agar balls <= 0 ya runs < 0, return 0
 *
 *   2. calcEconomy(runsConceded, overs)
 *      - Economy = runsConceded / overs, rounded to 2 decimal places
 *      - Agar overs <= 0 ya runsConceded < 0, return 0
 *
 *   3. calcBattingAvg(totalRuns, innings, notOuts = 0)
 *      - Batting avg = totalRuns / (innings - notOuts), rounded to 2 decimal places
 *      - Default notOuts = 0
 *      - Agar innings - notOuts <= 0, return 0
 *
 *   4. isAllRounder(battingAvg, economy)
 *      - Return true agar battingAvg > 30 AND economy < 8
 *
 *   5. getPlayerCard(player)
 *      - player object: { name, runs, balls, totalRuns, innings, notOuts, runsConceded, overs }
 *      - Return: { name, strikeRate, economy, battingAvg, isAllRounder }
 *      - Use the above functions internally
 *      - Agar player null/undefined hai ya name missing, return null
 *
 * Hint: Use const fn = (params) => expression or const fn = (params) => { ... }
 *
 * @example
 *   calcStrikeRate(45, 30)  // => 150
 *   calcEconomy(24, 4)      // => 6
 *   getPlayerCard({ name: "Jadeja", runs: 35, balls: 20, totalRuns: 2000, innings: 80, notOuts: 10, runsConceded: 1500, overs: 200 })
 *   // => { name: "Jadeja", strikeRate: 175, economy: 7.5, battingAvg: 28.57, isAllRounder: false }
 */
export const calcStrikeRate = (runs, balls) => {
  // -- base-case
  if(balls <= 0 || runs < 0) return 0;

  let strikeRate = ((runs/balls) * 100).toFixed(2);

  return parseFloat(strikeRate);
};

export const calcEconomy = (runsConceded, overs) => {
  // --base case
  if(overs <= 0 || runsConceded < 0) return 0;

  let Economy = (runsConceded/overs).toFixed(2);
  return parseFloat(Economy)
};

export const calcBattingAvg = (totalRuns, innings, notOuts = 0) => {
  // --base case
  if(innings-notOuts <= 0) return 0;

  let Batting_avg = (totalRuns/(innings-notOuts)).toFixed(2);
  return parseFloat(Batting_avg);
};

export const isAllRounder = (battingAvg, economy) => {
  
  let result = (battingAvg>30 && economy<8)?true:false;
  return result;
};

export const getPlayerCard = (player) => {

  if(player === null ||
    player === undefined || 
    player.name === undefined
  ) return null;
  
  let name = player.name;
  let runs = player.runs;
  let balls = player.balls;
  let totalRuns = player.totalRuns;
  let innings = player.innings;
  let notOuts = player.notOuts;
  let runsConceded = player.runsConceded;
  let overs = player.overs;

  let strikeRate = calcStrikeRate(runs, balls);
  let economy = calcEconomy(runsConceded, overs);
  let battingAvg = calcBattingAvg(totalRuns, innings, notOuts);
  let isAllRound = isAllRounder(battingAvg, economy);

  return {
    name: name, 
    strikeRate: strikeRate, 
    economy: economy, 
    battingAvg: battingAvg, 
    isAllRounder: isAllRound
  };
};
