// variable and constants
// --variable and constants are use to store data 
// --But the different is constants are fixed, we can not change the value of constant
// --while variables can be changed.
// --example:
const PI = 3.14; //--constant
let name = "John"; //--variable
var name1 = "Anurag"; //--variable
console.log(name1)

// Hoisting 
// --variable and functions are hoisted 
// --which means there declaration is moved on the top of the code
// --example :
myName(); 
function myName(){
    console.log("My Name is Anurag");
    }

// Types in js 
// --primjtive & referance
// --primitive types: number, string, boolean, null, undefined symbol
// --referance type: object() , array[] , function {}
// --example:
let num = 20; // --primitive --> number
let arr = [1,2,3]; // --referance --> array

// Conditionals 
// --if else & else if  statement
// --example:
let age = 18;
if (age > 18){
    console.log('You are an adult');
    }else if (18<=age<=20) {
        console.log('You are an teen');
    }
    else{
        console.log('you are a minor')
        }

// loops
// --for loop
// --example:
for (let i=0;i<5;i++){
    console.log(i);
    }
// --while loop
    let j = 0;
    while (j < 5){
        console.log(j);
        j++
    }

// Functions
// --example:
function programmer_life(){
    console.log("code");
    console.log("Coffee");
    console.log("Eat");
    console.log("Sleep");
    console.log("Repeat");
}
programmer_life();
// --functions can take arguments
// --return values from the function
// --example:
function addNum(a,b){
    return a+b;
}
console.log(addNum(4,6));

// Arays
// --In JavaScript, an array is a data structure that stores a fixed number of elements of the same type.
// --Example:
var z = [1,2,6,8,7];
console.log(z);
console.log(z[2]);
// --Array Operations
// --push() method adds new item to the end of an array
// --Example:
z.push(9);
console.log("the use of push")
console.log(z);
// --pop() method removes last element from an array and returns removed value
// --Example:
z.pop();
console.log("the use of pop")
console.log(z);
// --shift() method removes first element from an array and returns removed value
// --Example:
z.shift();
console.log("the use of shift")
console.log(z);
// --unshift() method adds new items to the beginning of an array
// --Example:
z.unshift(-3,-4);
console.log("the use of unshift")
console.log(z);
// --splice() method changes content of an array
// --Example:
z.splice(0, 1); //removes one element at index 0
console.log("the use of splice")
console.log(z);
// --slice() method extracts parts of an array
// --Example:
var x = z.slice(0,3)
console.log("the use of slice")
console.log(x);


// Object
// --An object in Javascript is collection of properties (key-value pairs), 
// --each property consists of a unique key and a corresponding value.
// --Example:
var person={
    name:"Purva",
    age:18
}; //it is object
console.log(person);
console.log(person["name"]);
// --Object Properties
// --Property Name : It can be any string but it should not contain space or special characters.
// --Value        : The value associated with the property.
// --In JavaScript, every function is also an object.
// --Properties   : These are data members stored in an object.
// --Methods     : Functions which perform operations on the object.
// --Example:
var watch={
    brand:"Sonata",
    color:"Black",
    size:"1.96 mm",
   alarm: function beep(){              
    console.log("beep.beep.beep");
   }
}
watch.alarm();
console.log(watch);


