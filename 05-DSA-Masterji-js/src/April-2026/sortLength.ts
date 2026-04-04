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