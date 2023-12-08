// Question no 1: 
// --Age Verification:
// --Write a JavaScript program that asks the user for their age and displays a message based on their age. Use an if statement to check if the user is old enough to:
// --18: Vote

var  a;
const prompt = require('prompt-sync')({sigint: true}); // this line of code is required when you are trying to get input from the user in the IDE
a = prompt("Enter your age");
if (a>=18){
    console.log("you are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}



// Question no 2:  
// --Number Checker:
// --Write a JavaScript program that takes a number as input and checks if it is:
// --Positive: Greater than 0
// --Negative: Less than 0
// --Zero: Equal to 0

var b;
const prompt1 = require('prompt-sync')({sigint: true});
b = prompt1("Enter the number to check positive or negative number: ");
if(b>0){
    console.log("The number "+b+" is greater than zero.");
    console.log("So its a positive number");
}
else if(b<0){
    console.log("The number "+b+" is the smaller than 0");
    console.log("So its a negative number");
}
else{
    console.log("You entered 0");
}

// question no 3:
// --Even or Odd:
// --Write a JavaScript program that takes a number as input and checks if it is even or odd. 
// --Use an if statement and the % operator to determine the remainder of the division by 2.

var c;
const prompt2 = require('prompt-sync')({sigint: true});
c = prompt2("Enter the numberr to check, the number is odd or even");
if (c%2==0){
    console.log("the number is even");
}
else {
    console.log("The number is odd");
}


// question no 4:
// --Grade Calculator:
// --Write a JavaScript program that takes a student's score as input and assigns a letter grade based on the following criteria:
// --90-100: A
// --80-89: B
// --70-79: C
// --60-69: D
// --Below 60: F

var d;
const prompt3 = require('prompt-sync')({sigiht: true});
d = prompt3("Enter your score: ");
if (d >= 90 && d <= 100) {
    console.log("Your grade is A");
  } else if (d >= 80 && d <= 89) {
    console.log("Your grade is B");
  } else if (d >= 70 && d <= 79) {
    console.log("Your grade is C");
  } else if (d >= 60 && d <= 69) {
    console.log("Your grade is D");
  } else if (d < 60) {
    console.log("Your grade is F");
  } else {
    console.log("Invalid Score");
  }


// Question no 5:  
// --Password Validator:
// --Write a JavaScript program that asks the user to enter a password and checks if it meets the following criteria:
// --Minimum length: 8 characters
// --Uppercase letter: At least one uppercase letter
// --Lowercase letter: At least one lowercase letter
// --Number: At least one number

const prompt4 = require('prompt-sync')({sigint: true});
const password = prompt4("Please enter your password: ");

// Define the validation criteria
const minLength = 8;
const hasUppercase = /[A-Z]/.test(password);
const hasLowercase = /[a-z]/.test(password);
const hasNumber = /[0-9]/.test(password);

// Validate the password length
if (password.length < minLength) {
  console.log("Password should be at least 8 characters long. ☠️");
} else {
  console.log("Password meets length criteria ✅");
}

// Validate the uppercase character
if (!hasUppercase) {
  console.log("Password should contain at least one uppercase letter. ☠️");
} else {
  console.log("Password contains an uppercase character 👍 ");
}

// Validate the lowercase character
if (!hasLowercase) {
  console.log("Password should contain at least one lowercase letter. ☠️");
} else {
  console.log("Password contains a lowercase character.👍");
}

// Validate the number
if (!hasNumber) {
  console.log("Password should contain at least one number. ☠️");
} else {
  console.log("Password contains a number. 😏");
}



