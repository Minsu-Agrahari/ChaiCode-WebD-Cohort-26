function isPowerOfTwo(n: number): boolean {
    // n: integer to check if it is a power of two
    // Return true if n is a power of two, otherwise false

    if (n <= 0) return false;

    const power = Math.log(n) / Math.log(2);

    return Number.isInteger(power);
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
