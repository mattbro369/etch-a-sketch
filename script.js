const getContainer = document.getElementById("container");
const newDiv = document.createElement("div");
const button = document.getElementById("button");
let numOfSquares;

//TODO CSS Grid to layout according to numofsquares

button.addEventListener("click", () => {
  getNumOfSquares();
  for (i = 0; i < numOfSquares; i++) {
    const newDiv = document.createElement("div");
    newDiv.innerText = `${i + 1}`;
    getContainer.appendChild(newDiv);
    newDiv.classList.add("grid");

    let grids = document.querySelectorAll(".grid");
    for (let grid of grids) {
      grid.addEventListener("mouseover", () => {
        grid.classList.add("gridHover");
      });
    }
  }
});

function getNumOfSquares() {
  numOfSquares = parseInt(prompt("Enter number of squares each side of grid"));
  while (numOfSquares < 1 || numOfSquares > 100) {
    numOfSquares = parseInt(prompt("Enter a number between 1 - 100"));
  }
  numOfSquares *= numOfSquares;
  return numOfSquares;
}
