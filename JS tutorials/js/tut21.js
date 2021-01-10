let div = document.createElement("div");
div.setAttribute("id", "firstDiv");
div.setAttribute("style", "border:2px solid;width:auto;height:auto;padding:5%");
let firstHead = document.querySelector("body");
let h1 = document.querySelector("h1");
firstHead.appendChild(div);
div.innerText = "This is my text"
div.addEventListener("click", function (params) {
    if (document.getElementsByClassName("textarea").length == 0) {
        div.innerHTML = `<textarea class="textarea" id="textA">${div.innerHTML}</textarea>`
    }
    document.getElementById("textA").addEventListener("blur", function (params) {
        let local = localStorage.setItem("text", document.getElementById("textA").value);
    })
})
