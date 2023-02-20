//declare variables
let rows;
let cols;
let promptButton = document.getElementById("promptButton");
const parent = document.getElementById("parent");

//places an initial 16x16 grid on the page
setGridSize(16, 16);

function setGridSize (rows, cols) { //creates a row of x boxes x amount of times to create a grid
        parent.style.setProperty('--grid-rows', rows);
        parent.style.setProperty('--grid-cols', cols);
        for (c = 0; c < (rows * cols); c++) {
          let box = document.createElement("div");
          parent.appendChild(box).className = "box";
        };
}

promptButton.addEventListener ("click", ()=> { //collects a grid size value from the user
    parent.innerHTML = "";
    rows = cols = prompt('Enter grid size (\"32 will return a 32x32 grid\")');
    setGridSize(rows, cols);
    
    // add if else here to check input is a number, and to set a max size

});