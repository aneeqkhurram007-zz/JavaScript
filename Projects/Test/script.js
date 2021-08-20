const navbar = document.getElementById("navbar")
if (screen.width < 500) {
    const button = document.createElement("button")
    // console.log(button);
    button.innerHTML = "Toggler"
    button.setAttribute("data-toggle", false)
    navbar.appendChild(button);
    const content = document.getElementById('content');
    let attribute = button.getAttribute('data-toggle');
    content.style.display = "none";
    button.addEventListener('click', () => {


        if (attribute === false) {

            content.style.display = "none";
        }
        else {

            content.style.display = "block";

        }
        attribute = !attribute;

    })

    console.log(navbar.childElementCount);
}