const container = document.getElementById("container");
var gridOn = false;
var numBombs = 0;
var numMozins = 0;
var numRuans = 0;

function changeColor(div, color) {
    div.style.backgroundColor  = color;
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', function() {
        changeColor(this, "lightgreen");
    });
    cell.addEventListener('mouseleave', function() {
        changeColor(this, "white");
        });
    let bomb = Math.floor(Math.random() * 2);
    if (bomb % 2 === 0) {
        cell.addEventListener("click", function() {
            bomb(cell);
        });
    } else {
        cell.addEventListener("click", function() {
            notBomb(cell);
        });
    }
    container.appendChild(cell).className = "grid-item";
    cell.classList.add('empty');
  };
};

function bomb(cell) {

}

function notBomb(cell) {

}

function init() {
    document.getElementById("start").addEventListener('click', function() {
        createGrid();
    });
}

function createGrid() {
    restart();
    let v = document.getElementById("inp").value;
    makeRows(v, v);
    gridOn = true;
}


function restart() {
    container.innerHTML = "";
}

init();