/**
 * Problem: String Matching in an Array
 * 
 * Description:
 * Given an array of string words, find all the words that are a substring 
 * of another word in the array. Return the matching words in a list.
 * 
 * What the code does:
 * It checks every word against every other word in the array. 
 * If a word is found inside another longer word and isn't already 
 * in the result list, it gets added. 
 * 
 * Example:
 * Input: ["book", "hook", "library", "librarybook"]
 * Output: ["book", "hook"]
 * Explanation: "book" and "hook" are substrings of "librarybook".
 */
function stringMatching(words: string[]): string[] {
    // words: array of strings
    
    // Your implementation here

    const len = words.length;
    let result: string[] = [];

    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            // console.log(`-----> ${words[i]} = ${words[j]}`);
            
            if(words[i].includes(words[j]) && words[i].length > words[j].length && !result.includes(words[j])){
                result.push(words[j]);
            }
        }
    }

    return result;
}


const result = stringMatching(["book", "hook", "library", "librarybook"]);
console.log(result);

const result1 = stringMatching(["chaicode", "chai", "code"]);
console.log(result1);

const result2 = stringMatching(["blue", "red", "green"]);
console.log(result2);

const result3 = stringMatching(["a","ab","abc","abcd","abcde"]);
console.log(result3);
