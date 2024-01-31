//  What is Document Object Model (DOM)
//         The Document Object Model (DOM) is an application programming interface (API) for manipulating HTML documents.

//         The DOM represents an HTML document as a tree of nodes. The DOM provides functions that allow you to add, remove, and modify parts of the document effectively.

//         Note that the DOM is cross-platform and language-independent ways of manipulating HTML and XML documents.

var a = document.querySelector("#background");
var b = document.querySelector("#on");
var c = document.querySelector("#off");

b.addEventListener("click",function(){
    a.style.backgroundColor = "yellow";
});

c.addEventListener("click",function(){
    a.style.backgroundColor = "black";
});