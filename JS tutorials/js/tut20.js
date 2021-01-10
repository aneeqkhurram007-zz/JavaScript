console.log("This is tut 20");
let arr = ["Aneeq", 56, "Sheikh", 007];
localStorage.setItem("Info", JSON.stringify(arr));
let localItem = JSON.parse(localStorage.getItem("Info"));
console.log(localItem);
// localStorage.clear();
sessionStorage.setItem("Name2", "Murshad Sheikh");
