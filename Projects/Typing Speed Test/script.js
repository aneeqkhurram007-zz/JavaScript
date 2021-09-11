const msg = document.getElementById('queryData')
const info = document.getElementById('info')
const button = document.getElementById('start')
const textArea = document.querySelector('textarea')
let startTime, endTime;
const textArray = [];
async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json();
    msg.innerHTML = data[Math.floor(Math.random() * 100)].name
}

function playGame() {
    textArea.value = ""
    textArea.disabled = false
    getData();
    startTime = new Date().getTime();
    button.innerHTML = "Done"


}
const compareWords = (innerText, message) => {
    let words1 = innerText.split(' ');
    let words2 = message.split(' ');
    let error = 0;
    words1.forEach((word, index) => {
        if (word !== words2[index]) {
            error++
        }
    })
    return error;
}
function endGame() {
    if (textArea.value.length > 1) {
        textArea.disabled = true
        button.innerHTML = "Start"
        endTime = new Date().getTime();
        let totalTime = Math.round(((endTime - startTime) / 1000))
        let totalString = textArea.value;
        let wordCount = totalString.split(' ').length
        //Word Count
        let speed = Math.round((wordCount / totalTime) * 60)
        let err = compareWords(totalString, msg.innerHTML)
        info.innerHTML = `Your typing speed is ${speed} words per minute and Error Words = ${err}
        `

    }

}
button.addEventListener('click', function () {
    if (this.innerText === "Start") {
        playGame();
    }
    else {
        endGame();
    }

})
