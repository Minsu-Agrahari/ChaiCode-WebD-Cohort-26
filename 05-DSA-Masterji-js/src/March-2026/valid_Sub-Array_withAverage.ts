/**
 * Problem: Valid Sub-Array with Average
 * Return the number of sub-arrays of size k and average greater than or equal to threshold.
 * 
 * Example:
 * Input: arr = [1000000,1000000,1000000,1000000,1000000], k = 1, threshold = 1000000
 * Output: 5
 */
class vaildSubArray {
    countVaildSubarray(arr: number[], k: number, threshold: number): number {

        let len = arr.length;
        let count = 0;

        // let sum = 0;
        for(let i=0; i<len; i++){


            if(i+k > len){
                break;
            }
            // console.log();
            
            let subarr = arr.slice(i, i+k);
            
            let sum = subarr.reduce((acc: number, curr: number) => {
                return acc + curr;
            }, 0);
            
            console.log(`${i} ------ ${subarr} ------  ${sum}`);
            if(sum/k >= threshold){
                count++;
            }
        }



        return count;
    }
}

let vaild = new vaildSubArray();

console.log(
    vaild.countVaildSubarray([1000000,1000000,1000000,1000000,1000000], 1, 1000000)
);

/*
    0 ------ 3,3,3
1 ------ 3,3,3
2 ------ 3,3,6
3 ------ 3,6,6
4 ------ 6,6,6
5 ------ 6,6,9
*/
