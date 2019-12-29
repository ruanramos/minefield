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
    cell.innerText = c;
    cell.addEventListener('mouseover', function() {
        changeColor(this, "lightgreen");
    });
    cell.addEventListener('mouseleave', function() {
        changeColor(this, "white");
        });
    let bomb = Math.floor(Math.random() * 10);
    if (bomb % 7 === 0) {
        numBombs++;
        cell.addEventListener("click", function() {
            gameOver(cell);
        });
    } else {
        let t = Math.floor(Math.random() * 2);
        if (t % 2 === 0) {
            numRuans++;
        } else {
            numMozins++;
        }
        cell.addEventListener("click", function() {
            notBomb(cell, t);
        });
    }
    container.appendChild(cell).className = "grid-item";
    cell.classList.add('empty');
  };

  let infos = document.querySelectorAll('.info');
  infos[0].innerHTML += numBombs;
  infos[1].innerHTML += numMozins;
  infos[2].innerHTML += numRuans;
  
}

function gameOver(cell) {
    cell.classList.add('clicked-bomb');
    cell.classList.remove('empty');
    gameOverCleanUp();
    var cat = document.createElement('IMG');
    cat.setAttribute('src', 'cat.jpg')
    cat.className = 'cat';
    cat.style.textAlign = "center";
    document.body.appendChild(cat);
    document.getElementById('title').innerText = "PSPSPSPSPSPSPSPS";
}

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