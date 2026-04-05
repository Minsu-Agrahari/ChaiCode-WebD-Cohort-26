/**
 * Problem: Power of Three
 * 
 * Description:
 * Given an integer, write a function to determine if it is a power of three.
 * An integer n is a power of three, if there exists an integer x such that n == 3^x.
 * 
 * What the code does:
 * It checks if n is positive. Then, it uses logarithms to see if log3(n) is an integer. 
 * Due to precision issues with floating-point math, it compares the difference 
 * between the calculated value and its nearest integer to a very small threshold.
 * 
 * Example:
 * Input: 27
 * Output: true
 * Explanation: 27 = 3^3
 */
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