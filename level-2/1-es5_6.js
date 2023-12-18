// Es_5 and Es_6 are tow version of javascript
// --Es5 is the old version of javascript and Es6 is the new version of javascript

// Difference between let const and var
// -- var is the element of Es5 js 
// ---var is the function scoped 
//    => means the variable which is declear into the function that variable we can use anywhere into the same function.
// Example:
function abcd(){
    for(var i =0; i<11 ; i++){
        console.log(i);
    }
    console.log(i); 
}
// var add itself to the window objects ==> window objects are the objects which are not the part of javascript language. 



// -- let and const are the element of Es6 js
// ---let and const is the braces scoped
//    => means the variable which is declear into the breces that variable we can use only in the same braces.
// Example:
function abcd(){
    for(let i =0; i<11 ; i++){
        console.log(i);
    }
    console.log(i); // because of let this line will show undefined error. 
}
// let and const dose not add itself to the window objects


// Browser context API
// --Stack
//   => stack is the first in last out type of storage
// --Heap memory
//   => It is temporery storage which is use to store data at the time of exeucation.


// Execution context
// => It is Imaginary box which include 
//    --variable, 
//    --functions inside that the parent function
//    --lexical enviroment 
//    this box is created by the function at the time of execution  
//    it is a object with properties and methods


// Lexical environment
// => A lexical environment is essentially a data structure that maps identifiers (variable names and function names) to their 
//    corresponding variables and functions. It defines the context in which those identifiers are declared and accessible.

// How it works:
// --Each execution context (like a function) has its own lexical environment.
// --This environment stores all the variables and functions declared within that specific context.
// --If a variable is referenced inside the context, the engine first searches for it in its own lexical environment.
// --If the variable isn't found there, it looks to the outer environment, which is the lexical environment of the context it was declared in.



// How to copy values 
// -- In js we can copy values with the help of spread operators (...)
// -- Example:
a = [1,2,3,4,5,6];
b = [...a]; // this line of code will copy all the values of a and ti will stored in b
b.pop();
console.log(a); // Output : [1,2,3,4,5,6]
console.log(b); // Output : [1,2,3,4,5]


