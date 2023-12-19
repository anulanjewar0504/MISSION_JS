// forEach loop
// => this loop is only run on array, with this loop we can access every element of array.
// for exe:
a = [1,2,3,4,5,6,7,8,9,12,32,45,65,78,98];
a.forEach(function(val){
     console.log(val);
}); 
// This loop dose not make change in original copy of array but it creates temporary copy of that array. 



// forin loop 
// The for...in loop in JavaScript is a way to iterate over the properties of an object or other iterable object. 
// It runs a block of code once for each property in the object, providing access to the property name and value within the loop.

var obj = {
     name: "Anurag",
     age: 23,
     city: "Pune"
}
for (var key in obj){
     console.log(key);
     console.log(obj);
     console.log(obj[key]);
     console.log(key,":", obj[key]);
}
