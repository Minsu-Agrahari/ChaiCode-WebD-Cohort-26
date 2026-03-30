/**
 * Problem: Pangram Checker
 * Determine if a given sentence contains all 26 letters of the English alphabet (a-z) at least once.
 * 
 * Example:
 * Input: "The quick brown fox jumps over the lazy dog"
 * Output: true
 */
class pangramChecker {
  /**
   * Checks if the given sentence is a pangram
   * 
   * @param {string} sentence - The input sentence to check (should contain lowercase English letters and spaces)
   * @returns {boolean} - Returns true if the sentence is a pangram, false otherwise
   * 
   * Algorithm:
   * 1. Create an empty Set to store unique characters
   * 2. Iterate through each character in the sentence
   * 3. Add each character to the Set (duplicates are automatically ignored)
   * 4. After iteration, check if Set size is >= 26 (all 26 letters present)
   */
  isPangram(sentence: string): boolean {
    const set = new Set();

    for (let ch of sentence) {
      set.add(ch);
    }

    console.log(set);

    return set.size >= 26 ? true : false;
  }
}

const sentence = "abcd";

const check = new pangramChecker();
console.log(check.isPangram(sentence));
