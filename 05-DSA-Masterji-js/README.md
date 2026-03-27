# DSA Masterji - Data Structures & Algorithms

A collection of Data Structures and Algorithms problems implemented in TypeScript as part of the Chai Code Cohort 26.

## Folder Structure

```
00-DSA-Masterji/
├── README.md
├── package.json
├── tsconfig.json
└── src/
    ├── sqrt.ts
    ├── smallestNum.ts
    ├── evenDifferencePartition.ts
    ├── rightRotation.ts
    ├── twoHalves.ts
    ├── pangramChecker.ts
    └── valid_Sub-Array_withAverage.ts
```

## Program Files

| File Name | Description | Problem Statement |
|-----------|-------------|-------------------|
| `sqrt.ts` | Integer Square Root | Find the integer square root of a non-negative integer x rounded down using binary search algorithm. Handles edge cases like negative numbers and small values. |
| `smallestNum.ts` | Count Smaller Numbers For Each Element | For each element in the array, count how many numbers are strictly smaller than it. Uses frequency array and prefix sum approach. |
| `evenDifferencePartition.ts` | Even Difference Partitions | Count the number of partitions in an array where the difference between the sum of the left part and the sum of the right part is even. |
| `rightRotation.ts` | Right Array Rotation | Rotate an array to the right by k steps. Handles edge cases by taking modulo of k with array length. |
| `twoHalves.ts` | Interleave Array | Interleave the two halves of an array of length 2n by alternating elements from the first half and second half. |
| `pangramChecker.ts` | Pangram Checker | Check if a given sentence contains all 26 letters of the English alphabet (a-z). Uses a Set data structure to track unique characters. |
| `valid_Sub-Array_withAverage.ts` | Valid Sub-array with Average | Given an array of integers and integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold. |

## Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install TypeScript dependency:
```bash
npm install
```

2. Compile TypeScript files:
```bash
tsc
```

## Running the Programs

### Run Individual Files with Node.js

First, compile the TypeScript file to JavaScript:
```bash
tsc src/sqrt.ts
```

Then run the compiled JavaScript:
```bash
node src/sqrt.js
```

### Run All Files

Compile all TypeScript files:
```bash
tsc
```

## Implementation Details

- **sqrt.ts**: Uses binary search algorithm to find the integer square root efficiently in O(log n) time complexity.
- **smallestNum.ts**: Implements a frequency-based approach with prefix sums for O(n) time complexity.
- **evenDifferencePartition.ts**: Creates prefix and suffix sum arrays to efficiently compute differences at partition points.
- **rightRotation.ts**: Uses modulo operation and array slicing to rotate elements in O(n) time complexity.
- **twoHalves.ts**: Simple iteration approach to interleave array elements in O(n) time.
- **pangramChecker.ts**: Uses a Set to track unique alphabetic characters and checks if the size reaches 26.
- **valid_Sub-Array_withAverage.ts**: Basic iteration approach to compute the sum of subarrays of length k.

## Technologies Used

- **TypeScript**: ^4.9.5
- **Node.js**: Runtime environment

## Notes

All solutions follow optimal algorithmic approaches with clear comments explaining the logic and steps involved.
