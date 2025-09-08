const gridContainer = document.querySelector(".grid-container");
const sizeSlider = document.querySelector(".slider");
const sizeOfGridText = document.querySelector(".grid-size-text");

//Default size.
makeGrid(16);

let sizeOfGrid = 16;

sizeSlider.addEventListener("mousedown", (event) => {
  let target = event.target;

  let sizeInterval = setInterval(() => {
    console.log("This is" + target.value);
    updateSizeText(target.value);
    makeGrid(target.value);
  }, 100);

  sizeSlider.addEventListener("mouseup", () => {
    let target = event.target;
    console.log(target.value);

    clearInterval(sizeInterval);
    updateSizeText(target.value);
  });
});

//This will update the  text that indicates the grid's size/
function updateSizeText(size) {
  sizeOfGridText.textContent = `${size} x ${size}`;
  sizeOfGrid = size;
}

function makeGrid(size) {
  //Deletes the old grid.
  removeGrid();

  //Makes a row first, then puts the square cells in each row.
  for (let j = 0; j < size; j++) {
    const currRow = document.createElement("div");
    currRow.setAttribute("class", "row");
    gridContainer.appendChild(currRow);

    for (let k = 0; k < size; k++) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      currRow.appendChild(cell);
    }
  }
}

function removeGrid() {
  const allRows = document.querySelectorAll(".row");

  for (let row of allRows) {
    row.remove();
  }
}
