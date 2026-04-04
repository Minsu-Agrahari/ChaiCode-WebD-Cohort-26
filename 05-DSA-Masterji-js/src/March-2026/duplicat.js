"use strict";
function findDuplicates(nums) {
    // nums: integer array of length n
    const set = new Set();
    let dupli = [];
    for (let elem of nums) {
        if (set.has(elem)) {
            dupli.push(elem);
        }
        else
            set.add(elem);
    }
    return dupli;
}
console.log(findDuplicates([5, 4, 3, 7, 6, 3, 4, 8]));
console.log(findDuplicates([2, 2, 3]));
console.log(findDuplicates([2]));
