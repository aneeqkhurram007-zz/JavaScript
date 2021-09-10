//Hoisting and Scoping
let a = "job"
console.log(a);
(function name(params) {
    console.log(a);
    a = "new job"
})()
