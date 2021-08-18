const jokePara = document.getElementById('jokeText');
const jokeButton = document.querySelector('#jokeButton')

const generateJokes = () => {
    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }
    fetch('https://icanhazdadjoke.com', setHeader)
        .then((res) => res.json()
        ).then((data) => jokePara.innerHTML = data.joke).catch((error) => {
            console.log(error);
        })
}

jokeButton.addEventListener("click", generateJokes);
generateJokes();