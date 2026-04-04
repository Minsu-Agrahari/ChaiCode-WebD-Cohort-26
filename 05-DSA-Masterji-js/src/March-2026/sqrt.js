"use strict";
/**
 * Problem: Integer Square Root
 * Find the integer square root of a non-negative integer x rounded down.
 *
 * Example:
 * Input: 8
 * Output: 2 (since 2.828 rounded down is 2)
 */
class sqrt {
    integerSquareRoot(x) {
        // param x: non-negative integer
        // Return the integer square root of x rounded down
        // validation
        if (x < 0)
            return NaN;
        if (x === 0 || x === 1)
            return x;
        let low = 1, high = x, ans = 0;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (mid * mid === x) {
                return mid;
            }
            else if (mid * mid < x) {
                ans = mid;
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        return ans;
    }
}
{
    const sol = new sqrt();
    console.log(sol.integerSquareRoot(4));
    console.log(sol.integerSquareRoot(8));
    console.log(sol.integerSquareRoot(9));
    console.log(sol.integerSquareRoot(10));
}
