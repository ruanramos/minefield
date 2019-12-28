// function createLine(number) {
//     const newLine = document.createElement('div');
//     newLine.classList.add('line')
//     const container = document.getElementById("container");
    
//     for (let index = 0; index < 3; index++) {
//         const newDiv = document.createElement('div');
//         newDiv.classList.add("div");
//         newDiv.style.height = "300px";
//         if (number === 0) {
//             newDiv.setAttribute("id", 'top-line');
//         } else if (number === 2) {
//             newDiv.setAttribute("id", 'bottom-line');
//         }
//         newDiv.addEventListener('mouseover', function() {
//             changeColor(this, "lightgreen");
//         })
//         newDiv.addEventListener('mouseleave', function() {
//             changeColor(this, "white");
//         })
//         newDiv.addEventListener('click', function() {
//             clickHandler(turn, newDiv);
//         })
//         if (index === 1) {
//             newDiv.classList.add('center-column');
//         }
//         newLine.appendChild(newDiv);
//         container.appendChild(newLine);
//     }
// }

function changeColor(div, color) {
    div.style.backgroundColor  = color;
}

// function clickHandler(t, div) {
//     if (t % 2 === 0) {
//         const imgRuan = document.createElement('IMG');
//         imgRuan.setAttribute('src', 'ruan.jpeg');
//         imgRuan.setAttribute('id', 'image');
//         div.appendChild(imgRuan);
//     } else {
//         const imgMozin = document.createElement('IMG');
//         imgMozin.setAttribute('src', 'mozin.jpg');
//         imgMozin.setAttribute('id', 'image');
//         div.appendChild(imgMozin);
//     }
//     turn++;
// }

// createGrid(5);



const container = document.getElementById("container");
var gridOn = false;

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