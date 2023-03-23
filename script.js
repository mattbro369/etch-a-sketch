const getContainer = document.getElementById("container");
const newDiv = document.createElement("div");
const button = document.getElementById("button");
let numOfSquares;
let gridColNum;
let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));

//TODO SHRINK / GROW GRID ITEMS

button.addEventListener("click", () => {
  if (numOfSquares !== undefined) {
    clearGrid();
  }
  getNumOfSquares();
  for (i = 0; i < numOfSquares; i++) {
    const newDiv = document.createElement("div");
    newDiv.innerText = `${i + 1}`;
    getContainer.appendChild(newDiv);
    newDiv.classList.add("grid-items");
  }
  addHoverClass();

  calcGridColNum();
  document.documentElement.style.setProperty("--colNum", gridColNum);
  document.documentElement.style.setProperty("--rowNum", gridColNum);
});

function getNumOfSquares() {
  numOfSquares = parseInt(prompt("Enter number of squares each side of grid"));
  while (numOfSquares < 1 || numOfSquares > 100) {
    numOfSquares = parseInt(prompt("Enter a number between 1 - 100"));
  }
  numOfSquares *= numOfSquares;
  return numOfSquares;
}

function addHoverClass() {
  let grids = document.querySelectorAll(".grid-items");
  for (let grid of grids) {
    grid.addEventListener("mouseover", () => {
      grid.classList.add("gridHover");
    });
  }
}

function calcGridColNum() {
  gridColNum = Math.sqrt(numOfSquares);
  return gridColNum;
}

function clearGrid() {
  while (getContainer.firstChild) {
    getContainer.removeChild(getContainer.firstChild);
  }
}
