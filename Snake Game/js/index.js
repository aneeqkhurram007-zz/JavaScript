// Game Constants and Variables
let direction = {
    x: 0,
    y: 0,
};
const foosSound = new Audio('food.mp3');
const gameOver = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');
let board = document.getElementById('board');
let speed = 2;
let lastPaintTime = 0;
let snakeArray = [
    { x: 13, y: 15 }
];
let food = { x: 6, y: 7 };
let inputDirection = { x: 0, y: 0 };
let score = 0;
// Game Functions
function main(currentTime) {
    window.requestAnimationFrame(main);
    if ((currentTime - lastPaintTime) / 1000 < 1 / speed) {
        return
    }
    lastPaintTime = currentTime;
    gameEngine();
}
function isCollide(snakeArray) {
    return false;
}
function gameEngine() {
    // Part 1: Updating the snake variable (Array)
    if (isCollide(snakeArray)) {
        gameOver.play();
        musicSound.pause();
        inputDirection = { x: 0, y: 0 };
        alert("Game Over. Press any key to play again!");
        snakeArray = [{ x: 13, y: 15 }];
        musicSound.play();
        score = 0;

    }
    // Part 2: Render the snake and food
    // Display the Snake
    board.innerHTML = "";
    snakeArray.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head');
        }
        else {
            snakeElement.classList.add('snake');

        }
        board.appendChild(snakeElement);
    })
    // Display the food   
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);


}





//Main Login
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDirection = { x: 0, y: 1 }//Start the game
    moveSound.play();
    switch (e.key) {
        case 'ArrowUp':
            console.log("ArrowUp");
            inputDirection.x = 0;
            inputDirection.y = -1;
            break;
        case 'ArrowDown':
            console.log("ArrowDown");
            inputDirection.x = 0;
            inputDirection.y = 1;

            break;
        case 'ArrowLeft':
            console.log("ArrowLeft");
            inputDirection.x = -1;
            inputDirection.y = 0;

            break;
        case 'ArrowRight':
            console.log("ArrowRight");
            inputDirection.x = 1;
            inputDirection.y = 0;

            break;
        default:
            break;
    }
})