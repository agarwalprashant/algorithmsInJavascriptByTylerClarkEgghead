// function counter(){
//     for(let n=0;n<=10;n++){
//         console.log(n);
//     }
// }


// counter();


// Now we will convert this above counter looping function to a recursive function
// Refactor a Loop in JavaScript to Use Recursion

function counter(n){
    console.log(n)
    if(n === 10){
        return;
    }
    counter(n+1);
}

counter(0);