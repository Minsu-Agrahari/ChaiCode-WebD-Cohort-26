/**
 * Problem: Sort Array by String Length
 * 
 * Description:
 * Given an array of strings, sort them based on their lengths in ascending order.
 * If two strings have the same length, their original relative order should be preserved.
 * 
 * What the code does:
 * It maps each string to an object containing its value and original index.
 * Then it sorts them based on length. If lengths are equal, it uses the original 
 * index to preserve their relative order. Finally, it extracts the sorted strings.
 * 
 * Example:
 * Input: ["apple", "banana", "pear", "kiwi"]
 * Output: ["pear", "kiwi", "apple", "banana"]
 */
function organizeStringsByLength(strings: string[]): string[] {
    // Your implementation here

    return strings
        .map ((val, idx) => ({val, idx}))
        .sort ((a, b) => {
            if(a.val.length === b.val.length){
                return b.idx - a.idx; // preseve original order
            }
            return a.val.length - b.val.length;
        })
        .map(obj => obj.val);
}

console.log(organizeStringsByLength(["apple", "banana", "pear", "kiwi"]));