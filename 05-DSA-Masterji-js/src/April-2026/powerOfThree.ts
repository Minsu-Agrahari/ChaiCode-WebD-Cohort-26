function isPowerOfThree(n: number): boolean {
    // n: integer to check if it's a power of three
    
        // validation 
        if(n <= 0) return false;

        const val = Math.log(n) / Math.log(3);
        // console.log(val);

        return (val - Math.round(val)) < 1e-10;
}

console.log(isPowerOfThree(27)); // t
console.log(isPowerOfThree(0)); // f
console.log(isPowerOfThree(-3)); // f
console.log(isPowerOfThree(25)); // f 
console.log(isPowerOfThree(3)); // t