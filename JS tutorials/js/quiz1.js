let string = "youtube";
let a = document.links;
Array.from(a).forEach(function (elements) {
    if (elements.toString().includes(string)) {
        console.log(`<h2>${elements}</h2>`);
    }

})