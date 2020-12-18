const name = "Aneeq";
const greeting = "Good Morning";
let myHtml = `<h1>Hello ${name}</h1>
<p>${greeting}</p>
`
console.log(myHtml);
let myArr = [`${name}`, 2, 3, 4, `${greeting}`];
console.log(myArr);
let myObj = {

    "first Name": 'Aneeq Khurram',
    age: 20,
    marks: [`${name}`, 5, 6, 7, 8]


}

console.table(myObj.marks[4]);
document.body.innerHTML = `${myObj["first Name"]} is ${myObj.age} years old`;
for (const key in myObj) {
    console.log(`The ${key} of object is ${myObj[key]}`);
}
myArr.forEach(function (key, ind, arr) {


    console.log(key + ind, arr);
});