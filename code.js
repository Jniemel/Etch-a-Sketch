const gridContainer = document.querySelector('#grid-container');
gridContainer.classList.add('grid-container');

function changeBgColor() {
    this.style.backgroundColor = "black";
    return false;
}

function createGrid (squaresPerSide) {
    for (let i = 0; i < squaresPerSide; i++) {
        let row = document.createElement('div');
        gridContainer.appendChild(row).classList = "grid-row";
        for (let j = 0; j < squaresPerSide; j++) {
            let column = document.createElement('div');
            row.appendChild(column).classList = "cell";
        }
    }
}

function gridPrompt() {
    let squaresNum = prompt("How many squares per side? (max 100)")    
    createGrid(squaresNum);
    const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
    cell.addEventListener('mouseover', changeBgColor);
});
}

