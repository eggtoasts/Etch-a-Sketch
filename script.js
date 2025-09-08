//Make a 16x16 grid with flex box

//Should have the option to change number of squares per side
// (same size, 940px)
//Max squares per side is 100

//For loop? Calculate the div boxes by tot / inputted square, ex (940 / 100 -->) should be 9.4 x 9.4 per box

//I want the user to be able to pick the colors that they want :]

const gridContainer = document.querySelector(".grid-container");

makeGrid(16);

function makeGrid(size) {
  let squarePx = 16;

  let squareSize = 960 / 16;

  //Make a row first, then put it in each row.

  const cell = document.createElement("div");
  const square = document.createElement("div");

  square.setAttribute("class", "square");
  cell.setAttribute("class", "cell");

  for (let j = 0; j < size; j++) {
    square.setAttribute("class", `square`);
    let str = "square" + (j + 1);
    square.classList.add(str);

    gridContainer.appendChild(square.cloneNode(true));
    console.log(str);

    const currRow = document.querySelector("." + str);
    console.log(currRow);
    for (let k = 0; k < size; k++) {
      // console.log(currRow);
      currRow.appendChild(cell.cloneNode(true));
    }
  }
}
