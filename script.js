//TODO Add random RGB with mouseover
//TODO Add 10% black increase with each mouseover

const getContainer = document.getElementById("container");
const button = document.getElementById("button");
let numOfSquares = 16 * 16;
let gridColNum = 16;

//For the CSS Variables
let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));

// let colourArray = [];
// let red = parseInt(htmlStyles.getPropertyValue("--red"));
// let green = parseInt(htmlStyles.getPropertyValue("--green"));
// let blue = parseInt(htmlStyles.getPropertyValue("--blue"));

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

//TODO Add functionality to turn colour 10% more black on repeated mouseover

function changeColour(e) {
  if (e.target.className === "grid-items") {
    e.target.style.backgroundColor = `rgb(${calcRandomNum()}, ${calcRandomNum()}, ${calcRandomNum()})`;
  }
}

//TODO Prototype for 10% more black
//Prototype for RGB colour randomizer

function changeColour(e) {
  if (
    (e.target.className === "grid-items" &&
      e.target.getAttribute("style") === null) ||
    (e.target.className === "grid-items" &&
      e.target.getAttribute("style") === "")
  ) {
    e.target.style.backgroundColor = `rgb(${calcRandomNum()}, ${calcRandomNum()}, ${calcRandomNum()})`;
  } else {
    let targetStyle = e.target.style.backgroundColor;
    targetStyle = targetStyle.slice(4, -1);
    targetStyle = targetStyle.replaceAll(",", "");
    let targetStyleArray = targetStyle.split(" ");
    targetStyleArray = targetStyleArray.map(Number);
    targetStyleArray.forEach(function reduceNum(item, index, arr) {
      arr[index] = item - 255 / 10;
      e.target.style.backgroundColor = `rgb(${Math.round(
        targetStyleArray[0]
      )}, ${Math.round(targetStyleArray[1])}, ${Math.round(
        targetStyleArray[2]
      )})`;
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

function calcRandomNum() {
  return (randomNum = Math.floor(Math.random() * 256));
}

function reduceNum(item, index, arr) {
  arr[index] = item * 10;
}

// TEST CODE

// test = getContainer.firstChild.style.backgroundColor;
// testSplit = test.slice(4, -1);
// testSplit = testSplit.replaceAll(",", "");
// let testArray = testSplit.split(" ");
// testArray = testArray.map(Number);
// testArray.forEach(function reduceNum(item, index, arr) {
//   arr[index] = item - item / 10;
// // });
// e.target.style.backgroundColor = `rgb(${Math.round(testArray[0])}, ${Math.round(
//   testArray[1]
// )}, ${Math.round(testArray[2])})`;
