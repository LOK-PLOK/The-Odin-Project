const clear = document.querySelector(".reset");
const size = 16;
const sizeofContainer = 400;
// const ChangeSize = () => {
//     document.querySelector("#slider").innerHTML =
// }

function color(cell){
    cell.style['background-color'] = "black";
}

const gridarea = (size) => {
    const container = document.querySelector(".container");
    const grid = document.createElement('div');
    grid.classList.add("grid"); 
    container.appendChild(grid);
    for (let i = 0; i < size ; i++) {
        for(let j = 0; j< size; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell);
            cell.addEventListener("mouseover", () => color(cell));
        }
    }
}

gridarea(size);





function clearBoard(){
    const allCell = document.querySelectorAll(".cell");
    allCell.forEach((variable) => {
        variable.style['background-color'] = "white";
    })
}

clear.addEventListener("click",() =>clearBoard());