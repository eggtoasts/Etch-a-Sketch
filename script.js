const gridContainer = document.querySelector(".grid-container");

makeGrid(20);

function makeGrid(size) {
  let squarePx = 16;

  let squareSize = 960 / 16;

  //Make a row first, then put it in each row.

  for (let j = 0; j < size; j++) {
    //Made the code shorter-- realized that I can get a direct refernence from creating the object,
    //rather than going out of my way using querySelector
    const currRow = document.createElement("div");
    currRow.setAttribute("class", "row");
    gridContainer.appendChild(currRow);

    console.log(currRow);
    for (let k = 0; k < size; k++) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      currRow.appendChild(cell);
    }
  }
}
