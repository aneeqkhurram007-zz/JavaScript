//premitive Data Tyoes
var name = "harry";
var channel = 0;
const nameO = "Cannot Do Anything";
console.log(name, channel, nameO);
//Scope

{
  let name = "Sehikh";
}
console.log(typeof channel);
let isDrive = true;
let nullVar = null;
console.log(typeof isDrive);
let undef = undefined;
console.log(typeof undef);
//Object Literals
let marks = {
  harry: 34,
  aneeq: "50",
  sheikh: 64,
};
console.log(marks);
function name(params) {}
//type Conversion and Coercion
let myVar;
myVar = String(34);
let booleanVar = true;
booleanVar = String(false);
console.log("Data type is " + typeof booleanVar + " " + booleanVar);
let date = new Date();
console.log(date + typeof date);
let array = [1, 2, 3, 4];
console.log(array.length, typeof array);
let newNumber = parseFloat("354.3548");
console.log(newNumber.toFixed(2), typeof newNumber);
let html = "this is a heading";
console.log(html.substring(1, 6));
console.log(html.includes("heading"));
console.log(html.endsWith("headinda"));
console.log(html.slice(0, 4));
console.log(html.split("is"));
let fruit = "Orange";
let myHtml = `Hello ${name} <h1>
This is a heading
</h1>
<p>You like ${fruit}</p>`;

document.body.innerHTML = myHtml;
