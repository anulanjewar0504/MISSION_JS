// Question 1:
// --Create a function that accepts an array and a number, and removes that number from the array using a loop.
const prompt = require('prompt-sync')({sigint: true});
var a = prompt("The array of: ");
var k =[];
function add_element(){
for(let i=0;i<a;i++){
    var x = prompt("Enter the value of array: ");
    k.push(x);
}
console.log(k);
}

function remove_element(){
    for(let j=a-1; j>=0; j--){
        newarr = k.pop();
        console.log("The number "+newarr+" will be pop");
    }
}
console.log(add_element());
console.log(remove_element());


// Question 2:
// --Create a function that checks if a number is prime using a loop and conditional statements.
const prompt1 = require('prompt-sync')({sigint: true});
var n = prompt1("Enter the range from: ");
var m = prompt1("to: ");
function checkprime(){
    for (let i = n; i <= m; i++) {
        // Check if i is divisible by any number from 2 to its square root (excluding 1 and itself)
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
  
        if (isPrime) {
        console.log(i + " is a prime number.");
        }
    }
}
console.log(checkprime());


// Question 3:
// Create a code that fills a 2D array with specific values using nested loops.
const prompt2 = require('prompt-sync')({sigint: true});
const rows = prompt2("enter the number of columns: ");
const columns = prompt2("enter the number of rows: ");
const matrix = [];
function twodarr(){
for (let i = 0; i < columns; i++) {
  const row = [];
  for (let j = 0; j < rows; j++) {
    let y= prompt2("in rows: ");
    row.push(y); // Initialize each element with 0
  }
  matrix.push(row);
}
console.log(matrix);
}
console.log(twodarr());

  
