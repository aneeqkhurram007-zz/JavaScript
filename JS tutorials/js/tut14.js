console.log("Welcome to Tut 14");
let element = document;
// element = element.className;
element = element.querySelector('div');

console.log(element.previousElementSibling);

let arr = Array.from(element);
console.log(arr);
// let elems = document.getElementsByClassName('no');
let headElem = document.createElement("h1");

// headElem. = "Go";
headElem.innerText = "Go to Codewithharry ";

let par = document.createElement("a");
par.append(headElem);
let text = document.createTextNode("https//www.codewithharry.com");
par.setAttribute("href", text);
par.appendChild(text);

console.log(par);
