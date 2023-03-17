const getContainer = document.getElementById("container");
const newDiv = document.createElement("div");

for (i = 0; i < 256; i++) {
  const newDiv = document.createElement("div");
  newDiv.innerText = `${i + 1}`;
  getContainer.appendChild(newDiv);
  newDiv.classList.add("grid");
}
