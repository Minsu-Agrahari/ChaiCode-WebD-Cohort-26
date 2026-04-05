class Solution {

  countMatchingSubstringEdges(s: string): number {
    // s: A string consisting of only lowercase English letters
    // Returns the number of substrings that start and end with the same character.

    let len = s.length;
    let count = 0;

    let debug = [];

    for(let i=0; i<len; i++){

        for(let j=i; j<len; j++){
            
          const substr = s.slice(i, j+1);
          // console.log(substr);
          // console.log(substr);
          if(substr[0] === substr[substr.length-1]){
            count++;
            // console.log(`${s} ---> ${substr} ------ ${count}`);
          }
        }


    }

    console.log(count);
    return 0;
  }
}

let sub = new Solution();
sub.countMatchingSubstringEdges("mkzkm"); // 7
sub.countMatchingSubstringEdges("pripal"); // 9 
sub.countMatchingSubstringEdges("u"); // 1
