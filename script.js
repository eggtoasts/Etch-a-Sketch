const gridContainer = document.querySelector(".grid-container");
const sizeSlider = document.querySelector(".slider");
const sizeOfGridText = document.querySelector(".grid-size-text");
const colorPicker = document.querySelector(".color-picker");
const resetButton = document.querySelector(".reset-button");

let canDraw = true;

const green = "rgb(79, 255, 77)";
const red = "rgb(255, 78, 78)";
const blue = "rgb(22, 150, 255)";
const orange = "rgb(255, 137, 53)";
const yellow = "rgb(255, 225, 53)";
const purple = "rgb(215, 53, 255)";
const black = "black";
const erase = "white";

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
      case `yellow`:
        currentColor = "yellow";
        break;
      case `orange`:
        currentColor = "orange";
        break;
      case `green`:
        currentColor = "green";
        break;
      case `blue`:
        currentColor = "blue";
        break;
      case `purple`:
        currentColor = "purple";
        break;
      case `rainbow`:
        currentColor = "rainbow";
        break;
      case `fade`:
        currentColor = "fade";
        break;
    }
  });
}

resetButton.addEventListener("click", (event) => {
  makeGrid(sizeOfGrid);
});

colorPicker.addEventListener("hover", (event) => {
  console.log(event.target);
});

//When user moves the slider, the grid size moves to its respective size.

[`mousedown`, `click`].forEach((e) => {
  sizeSlider.addEventListener(e, (event) => {
    let target = event.target;

    if (e == `click`) {
      updateSizeText(target.value);
      makeGrid(target.value);
    } else {
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
    }
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
      cell.style["background-color"] = "white";
      currRow.appendChild(cell);

      //Adds events to each individual cell.
      addCellEvents(cell);
    }
  }
}

//Removes rows from grid container.
function removeGrid() {
  const allRows = document.querySelectorAll(".row");

  for (let row of allRows) {
    row.remove();
  }
}

document.addEventListener("keypress", (event) => {
  if (event.key == "a") canDraw = !canDraw;
});

//Gives each cell an event where it'll be the corresponding "currentColor" color.
function addCellEvents(cell) {
  cell.addEventListener("mouseover", (event) => {
    if (canDraw === false) return;
    let target = event.target;

    // console.log(currentColor);

    if (currentColor == "black") {
      target.style["background-color"] = black;
    } else if (currentColor == "red") {
      target.style["background-color"] = red;
    } else if (currentColor == "blue") {
      target.style["background-color"] = blue;
    } else if (currentColor == "orange") {
      target.style["background-color"] = orange;
    } else if (currentColor == "yellow") {
      target.style["background-color"] = yellow;
    } else if (currentColor == "green") {
      target.style["background-color"] = green;
    } else if (currentColor == "purple") {
      target.style["background-color"] = purple;
    } else if (currentColor == "rainbow") {
      //Random rainbow color
      const a = randomColor(20, 255),
        b = randomColor(0, 255),
        c = randomColor(0, 255);
      const randomRGB = `rgb(${a},${b},${c})`;

      target.style["background-color"] = randomRGB;
    } else if (currentColor == "fade") {
      let curr = target.style["background-color"];

      let opacity = curr.split(" ")[3];

      //Checks if there's a opacity property or if the cell has not been colored yet
      if (curr == "white" || opacity == null) {
        console.log("CURR IS " + curr + "\n");
        target.style.cssText = ` background-color:rgba(0, 0, 0, ${0.1});`;
      } else {
        opacity = opacity.substring(0, 3);
        console.log(opacity);
        if (opacity < 0.9) {
          target.style.cssText = ` background-color:rgba(0, 0, 0, ${
            Number(opacity) + 0.1
          });`;
        }
      }
    }
  });
}

function randomColor(min, max) {
  return Math.random() * (max - min) + min;
}
