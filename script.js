//Exercise 3.1
for (let i = 0; i <= 4; i++) {
    let stars = '';
    
    for (let j = 0; j <= i; j++) {
    stars += '*';
    }
    console.log(stars)
}

//Exercise 3.2
// Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.


// let x = 20;

// while (x > 0) {
//     x -= 0.5
//     console.log(x);
    
// }

//Exercise 3.3
//Print all the odd numbers between 1 - 100.


// let x = 1;
// while (x < 100) {
//     if (x % 2 !== 0){
//     console.log(x);} x++;
// }

//Exercise 3.4
//Write a method with a while loop to print 1 through n in square brackets. For example, if n = 6 print [1] [2] [3] [4] [5] [6]
// let n = 6;
// let i = 1;
// while (i <= n) {
//     console.log(`[${i}]`); i++;
// }

//Exercise 4.4
// Write a method with a while loop that computes the sum of first n positive integers:
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190

let n = 5;
let x = 1;
let sum = 0;

while (x <= n) {
    sum += x;
    x++; 
}
console.log(sum);
 

