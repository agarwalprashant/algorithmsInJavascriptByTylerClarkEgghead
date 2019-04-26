// function sum(arr){
//     let sum=0;
//     for(let i of arr){
//         sum+=i;
//     }
//     return sum;
// }


// console.log(sum([1,2,3,4,5]));  


// divide and conquer algorithms are recursive algorithms
//its a way to think about a problem decomposition

function sum(arr){
    if(arr.length === 0) return 0;
    arr
    return arr[0] + sum(arr.slice(1));
}

console.log(sum([1,2,3,4,5]))





