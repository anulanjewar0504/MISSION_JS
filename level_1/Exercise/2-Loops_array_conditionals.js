// Question 1:
// --Write a JS code using a loop to print all numbers from 1 to 10.
var a;
for (a=1; a<=10; a++){
    console.log(a);
}

// Question 2:
// --Modify the code to print only even numbers from 1 to 10.
var b;
for (b=1; b<=10; b++){
    if(b%2==0){
        console.log(b);
    }
}

// Question 3:
// --print numbers in reverse order (from 10 to 1)?
var c;
for (c=10; c>=0; c--){
    console.log(c);
}

// Question 4:
// --Array Manipulation:
// --Write a loop to iterate through an array of names and print them in uppercase.
var arr = ["Anurag", "Parth","Sangita", "Jaykrushna"];
for (i=0; i<arr.length; i++){
    console.log(arr[i].toUpperCase());
}

// Question 5:
// --Can you write a loop to sum up all the elements in a given array of numbers?
var arr1 = [1,2,3,4,5];
var total=0;
for(j=0;j<arr1.length;j++){
    total +=arr1[j];
} 
console.log(total);

// Question 6:
// --Conditional Looping:
// --Write a loop that iterates until the user enters a specific number.

var num;
const prompt = require('prompt-sync')({sigint: true});
while(true){
    num = prompt("Enter a number");
    if(num == 2){
        break;
    }else{
        console.log("Invalid input! Please try again.");
    }
}


//Question 7:
// --loop to print a pattern of stars, like a triangle or square?
// Print a square with side length 4:
const sideLength = 4;

for (let i = 1; i <= sideLength; i++) {
  console.log("*".repeat(sideLength));
}

// Print a pyramid with height 3:
const height = 3;

for (let i = 1; i <= height; i++) {
  // Print spaces before the stars:
  console.log(" ".repeat(height - i));

  // Print stars:
  console.log("*".repeat(2 * i - 1));
}

// question 8:
// --Write nested loops to print a multiplication table for numbers 1 to 5.
for (let i = 1; i <=5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + i *j);
    }
    console.log("\n");
}

// Question 9:
// --code a loop to calculate the factorial of a given number?
 
num =2;// If the number is less than 0, throw an error message
if (num < 0) {
    console.log("Number must be greater than or equal to 0");
}
   
// If the number is 0, its factorial is 1
if (num === 0){
    return 1;
}
// Otherwise, calculate the factorial using a loop
let result = 1;
for (let i = 1; i <= num; i++) {
    result *= i;
}
console.log(result);