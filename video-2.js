// function counter(){
//     for(let n=0;n<=10;n++){
//         console.log(n);
//     }
// }


// counter();


// Now we will convert this above counter looping function to a recursive function
// Refactor a Loop in JavaScript to Use Recursion

// function counter(n){
//     console.log(n)
//     if(n === 10){
//         return;
//     }
//     counter(n+1);
// }

// counter(0);


// Let's say we had an array of arrays with numbers in them. Our job is to look through the arrays for the number 6. If it's anywhere inside of this parent array, then we need to return true, or just the string, yes.

// const items = [[1,2,3],[4,5,6]];

// function findSix(i){
//     let hasSix = "no";
//     i.forEach(a => {
//         a.forEach(n => {
//             if(n === 6){
//                 hasSix = "yes";
//             }
//         })
//     });

//     return hasSix;
// }

// findSix(items); //?

// but the above approach is not very dynamic for example if we have items as [[1,2,3],[4,5,[6]]] it will return 'no'
//in order to solve this we can use recursion


const items = [[1,2,3],[4,5,[6]]];

function findSix(i){
    let hasSix = "no";
    i.forEach(a => {
       if(a === 6){
           hasSix = "yes";
       }

       if(Array.isArray(a)){
           hasSix = findSix(a);
       }
    });
    return hasSix;
}

findSix(items) //?