/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here

  // base case
  if(age<0 || typeof age !== 'number' || typeof isWeekend != 'boolean'){
    return -1;
  }

  var ticketPrice = 0;
  if(age <= 12) ticketPrice += 8;
  else if(age >= 13 && age <= 17) ticketPrice += 12;
  else if(age >= 18 && age <= 59) ticketPrice += 15;
  else if(age >= 60) ticketPrice += 10;

  if(isWeekend) ticketPrice += 3;

  return ticketPrice;
}
