const getContainer = document.getElementById("container");
// const newDiv = document.createElement("div");
const button = document.getElementById("button");
let numOfSquares = 16 * 16;
let gridColNum = 16;

//For the CSS Variables
let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));

//Print the default grid of 16 x 16
appendDivs();

getContainer.addEventListener("mouseover", changeColour);

button.addEventListener("click", () => {
  clearGrid();
  getNumOfSquares();
  calcGridColNum();
  appendDivs();
});

function getNumOfSquares() {
  numOfSquares = parseInt(prompt("Enter number of squares each side of grid"));
  while (numOfSquares < 1 || numOfSquares > 100) {
    numOfSquares = parseInt(prompt("Enter a number between 1 - 100"));
  }
  numOfSquares *= numOfSquares;
  return numOfSquares;
}

function appendDivs() {
  for (i = 0; i < numOfSquares; i++) {
    const newDiv = document.createElement("div");
    getContainer.appendChild(newDiv);
    newDiv.classList.add("grid-items");
  }
  document.documentElement.style.setProperty("--colNum", gridColNum);
  document.documentElement.style.setProperty("--rowNum", gridColNum);
}

function changeColour(e) {
  if (e.target.className === "grid-items") {
    e.target.classList.add("gridHover");
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
