function hasDuplicates(nums: number[]): boolean {
        // nums: integer array
        // Return true if there is any number that appears at least twice, otherwise false.

        const set = new Set();

        for(let elem of nums){
            if(set.has(elem)){
                console.log(`in ${elem}`);
                return true;
            }
            
            console.log(`out ${elem}`);
            set.add(elem);
        }

    return false;
}

console.log(hasDuplicates([1, 2, 3, 1])); // T
console.log(hasDuplicates([1, 2, 3, 4])); // F
console.log(hasDuplicates([1,1,1,3,3,4,3,2,4,2])); // T