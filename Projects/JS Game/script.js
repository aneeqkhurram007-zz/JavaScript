const score = document.querySelector('.score')
const startScreen = document.querySelector('.startScreen')
const gameArea = document.querySelector('.gameArea')
let player = {
    speed: 5,
    score: 0
};


function isCollide(a, b) {
    aRect = a.getBoundingClientRect();
    bRect = b.getBoundingClientRect();
    return !((aRect.top > bRect.bottom) || (aRect.bottom < bRect.top)
        || (aRect.left > bRect.right) || (aRect.right < bRect.left)
    );
}

function moveLines() {
    let lines = document.querySelectorAll('.lines')
    lines.forEach((line) => {
        if (line.y >= 1000) {
            line.y -= 1050
        }
        line.y += player.speed
        line.style.top = line.y + "px"
    })
}
function endGame() {
    player.start = false
    startScreen.classList.remove('hide')
}
function moveEnemy(car) {
    let enemies = document.querySelectorAll('.enemy')
    enemies.forEach((item, index) => {
        if (isCollide(car, item)) {
            endGame();
        }
        if (item.y >= 850) {
            item.y = -400
            item.style.left = Math.floor(Math.random() * 350) + "px"
        }
        item.y += player.speed
        item.style.top = item.y + "px"
    })
}
const playGame = () => {
    let car = document.querySelector('.car')
    let road = gameArea.getBoundingClientRect()
    if (player.start) {
        moveLines()
        moveEnemy(car)
        if (keys.ArrowUp && player.y > 100) {
            player.y -= player.speed
        }
        if (keys.ArrowDown && player.y < (road.bottom - 70)) {
            player.y += player.speed
        }
        if (keys.ArrowLeft && player.x > 0) {
            player.x -= player.speed
        }
        if (keys.ArrowRight && player.x < (road.width - 50)) {
            player.x += player.speed
        }
        car.style.top = player.y + "px";
        car.style.left = player.x + "px";
        player.score++;
        window.requestAnimationFrame(playGame)
        score.innerText = "Score: " + player.score
    }

}

// let time = 10;
// const showLines = () => {


//     let roadLines = document.createElement('div')
//     roadLines.setAttribute('class', 'lines')
//     gameArea.appendChild(roadLines)
//     setInterval(() => {
//         roadLines.style.top = (time) + "px"
//         requestAnimationFrame(showLines)
//         time += 10
//     }, 1000)

// }

const start = () => {
    // gameArea.classList.remove('hide')
    startScreen.classList.add('hide')
    gameArea.innerHTML = ""
    player.start = true
    player.score = 0
    score.style.background = "green"
    window.requestAnimationFrame(playGame)
    // 1 Method
    for (let index = 0; index < 7; index++) {
        let roadLines = document.createElement('div');
        roadLines.setAttribute('class', 'lines')
        roadLines.y = index * 150
        roadLines.style.top = (index * 150) + "px"
        gameArea.appendChild(roadLines)
    }

    // window.requestAnimationFrame(showLines)
    let car = document.createElement('div')
    car.setAttribute('class', 'car');
    gameArea.appendChild(car)
    player.x = car.offsetLeft
    player.y = car.offsetTop

    for (let index = 0; index < 3; index++) {
        let enemyCar = document.createElement('div');
        enemyCar.setAttribute('class', 'enemy')
        enemyCar.style.background = "#" + Math.round(Math.random() + 100)
        enemyCar.style.left = Math.round(Math.random() * 350) + "px"
        enemyCar.y = index * 150
        enemyCar.style.top = (index * 150) + "px"
        gameArea.appendChild(enemyCar)
    }

}

startScreen.addEventListener('click', start)

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

function keyDown(e) {
    e.preventDefault()
    keys[e.key] = true

}
function keyUp(e) {
    e.preventDefault()
    keys[e.key] = false

}

document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)