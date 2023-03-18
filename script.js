const getContainer = document.getElementById("container");
const newDiv = document.createElement("div");
const button = document.getElementById("button");

// TODO Create function to take prompt value as number of squares each side of grid
// TODO Check the number between 1 - 100, if not, repeat prompt.

button.addEventListener("click", () => {
  let num = prompt("Enter number of squares each side of grid: ");
  let numOfSquares = parseInt(num);
  if (numOfSquares < 1 || numOfSquares > 100) {
    num = prompt("Enter a number between 1 - 100");
  }
  return numOfSquares;
});

// Prints the grid
for (i = 0; i < 256; i++) {
  const newDiv = document.createElement("div");
  newDiv.innerText = `${i + 1}`;
  getContainer.appendChild(newDiv);
  newDiv.classList.add("grid");
}

// Adds the class on hover
const grids = document.querySelectorAll(".grid");
for (let grid of grids) {
  grid.addEventListener("mouseover", () => {
    grid.classList.add("gridHover");
  });
}
