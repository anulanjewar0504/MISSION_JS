// Truthy and falsy are key concepts in JavaScript for understanding how values evaluate in boolean contexts 
// like conditional statements, comparisons, and loops. Here's the breakdown:

// --Truthy values:
// ---These are values that evaluate to true when used in a boolean context. This includes:
// ----Any non-empty string ("hello", 123, even "")
// ----Any non-zero number (including -1, 0.1, even NaN)
// ----true
// ----Arrays and objects (even empty ones)
// ----Functions
// ----Date objects

// --Falsy values:
// ---These are values that evaluate to false when used in a boolean context. There are only six:
// ----false
// ----0 (including -0)
// ----"" (empty string)
// ----null
// ----undefined
// ----NaN (Not a Number)
// ----document.all

// Why it matters:
// --This distinction is crucial in conditional statements like if and while. For example, the code if (username) { ... }
//   will run the code inside the if block only if username is truthy (meaning it has a value and isn't falsy).
// --Understanding truthy and falsy values helps prevent unexpected behavior in your code and write more efficient and concise logic.
// Example:

if(1){  // in this line if you use any value which is belong from truthy value if block will  execute. for exe:1
    console.log('hey it it truthy value');
}
else{  // if you use any value which is belong from falsy values else block will execute. for exe: 0
    console.log('it is Falsy value');
}