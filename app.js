const container = document.querySelector('.container');

// Create button
function onClick() {
    let choice = prompt('How many squares per side of the grid?');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    if (choice > 100) {
        choice = 100;
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
                gridSquare.style.backgroundColor = 'black';
            });

            container.appendChild(gridSquare);
        }
    }
}

// Initial grid creation
createGrid(16);
