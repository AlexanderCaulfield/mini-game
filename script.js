const board = document.getElementById('board');
const colors = ['red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'purple'];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });

    board.append(square);
}

function setColor(squareElement) {
    const color = getRandomColor();
    squareElement.style.backgroundColor = color;
    squareElement.style.boxShadow = `0 0 2px ${color}, 0 0 7px ${color}`;
}

function removeColor(squareElement) {
    squareElement.style.backgroundColor = '#1d1d1d';
    squareElement.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);

    return colors[index];
}