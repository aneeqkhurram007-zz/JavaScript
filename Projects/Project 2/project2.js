const jokePara = document.getElementById('jokeText');
const jokeButton = document.querySelector('#jokeButton')

const generateJokes = async () => {
    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }
    // without async programming and promises
    // fetch('https://icanhazdadjoke.com', setHeader)
    //     .then((res) => res.json()
    //     ).then((data) => jokePara.innerHTML = data.joke).catch((error) => {
    //         console.log(error);
    //     })


    // with async programming (Test 🏳️)
    // const res = await (await fetch("https://restcountries.eu/rest/v2/name/nepal")).json()
    // console.log(res);
    // const [data] = res;
    // console.log(data);
    // jokePara.innerHTML = data.name

    const res = await fetch("https://icanhazdadjoke.com", setHeader);
    const data = await res.json();
    jokePara.innerHTML = data.joke

}

jokeButton.addEventListener("click", generateJokes);
generateJokes();