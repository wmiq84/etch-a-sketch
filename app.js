const container = document.querySelector('.container');

// Create button
function onClick() {
    let choice = prompt('How many squares per side of the grid?');

    // Remove existing grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    createGrid(choice);
}

function createGrid(dimensions) {
    // Set grid template based on dimensions
    container.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;

    for (let i = 0; i < dimensions; i++) {
        for (let j = 0; j < dimensions; j++) {
            const gridSquare = document.createElement('div'); 
            gridSquare.className = 'square';

            gridSquare.addEventListener('mouseover', () => { // Add event listener for mouseover
                gridSquare.style.backgroundColor = 'gold';
            });

            container.appendChild(gridSquare);
        }
    }
}

// Initial grid creation
createGrid(16);

// Add event listener to the button
document.querySelector('button').addEventListener('click', onClick);