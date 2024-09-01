const container = document.querySelector('.container');

function createGrid() {
    let row = 16;
    let col = 16;
    var gridSquares = [];

    for (let i = 0; i < row; i ++) {
        gridSquares[i] = []; // helping to initialize a 2d array
        for (let j = 0; j < col; j++) {
            gridSquares[i][j] = document.createElement('div'); 

            const gridSquare = gridSquares[i][j];
            gridSquare.className = "square";

            container.appendChild(gridSquare);
            console.log(gridSquares[i][j]);
        }
    }
}

createGrid();
