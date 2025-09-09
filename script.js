const gridContainer = document.querySelector(".grid-container");
const sizeSlider = document.querySelector(".slider");
const sizeOfGridText = document.querySelector(".grid-size-text");
const colorPicker = document.querySelector(".color-picker");

const canDraw = true;

const green = "rgb(79, 255, 77)";
const red = "rgb(255, 78, 78)";
const blue = "rgb(22, 150, 255)";

//Default size.
makeGrid(16);

let sizeOfGrid = 16;

//Our default color is black/
let currentColor = `black`;

const colors = [`black`, `green`, `red`, `blue`, `rainbow`];

// Function that lets you change the color
const colorOptions = document.querySelectorAll(".color");

for (let color of colorOptions) {
  //   console.log(color);

  color.addEventListener("click", (event) => {
    // console.log(event.target);
    let selectedColor = event.target.id;
    console.log(selectedColor);

    switch (selectedColor) {
      case `black`:
        currentColor = "black";
        break;
      case `red`:
        currentColor = "red";
        break;
      case `green`:
        currentColor = "green";
        break;
      case `blue`:
        currentColor = "blue";
        break;
      case `rainbow`:
        currentColor = "rainbow";
        break;
    }

    // switch ()
  });
}

colorPicker.addEventListener("hover", (event) => {
  console.log(event.target);
});

//When user moves the slider, the grid size moves to its respective size.
// "mousedown onclick".split(" ").forEach(function(e){})
[`mousedown`, `onclick`].forEach((e) => {
  sizeSlider.addEventListener(e, (event) => {
    let target = event.target;

    let sizeInterval = setInterval(() => {
      console.log("This is" + target.value);
      updateSizeText(target.value);
      makeGrid(target.value);
    }, 50);

    sizeSlider.addEventListener("mouseup", () => {
      let target = event.target;
      console.log(target.value);

      clearInterval(sizeInterval);
      updateSizeText(target.value);
    });
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

      //Adds events to each individual cell.
      addCellEvents(cell);
    }
  }
}

function removeGrid() {
  const allRows = document.querySelectorAll(".row");

  for (let row of allRows) {
    row.remove();
  }
}

function addCellEvents(cell) {
  cell.addEventListener("mouseover", (event) => {
    let target = event.target;

    console.log(currentColor);

    if (currentColor == "black") {
      target.style["background-color"] = "black";
    } else if (currentColor == "red") {
      target.style["background-color"] = red;
    } else if (currentColor == "blue") {
      target.style["background-color"] = blue;
    } else if (currentColor == "green") {
      target.style["background-color"] = green;
    }

    // console.log(target);
  });
}
