const container = document.querySelector(".container");
const grid = document.createElement('div');
const reset = document.createElement('button');
grid.classList.add("grid");
reset.classList.add("reset");
reset.textContent = "Reset";

container.appendChild(grid);
container.appendChild(reset);


for (let i = 0; i < 16 ; i++) {
    for(let j = 0; j< 16; j++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
}

const clear = document.querySelector(".reset");


function clearBoard(){
    const allCell = document.querySelectorAll(".cell");
    allCell.forEach((variable) => {
        variable.style['background-color'] = "white";
    })
}

clear.addEventListener("click",() =>clearBoard());