const gridContainer = document.getElementById("container");
const gridSlider = document.getElementById("grid-slider");
const valueTag = document.querySelector(".size-value");
const resetBtn = document.querySelector(".reset");
const colorPicker = document.querySelector(".color-picker");
let chosenColor = colorPicker.value;
let gridSize = gridSlider.value;


function generateGrid() {
  gridContainer.style.setProperty("--grid-size", gridSlider.value);
  gridContainer.innerHTML = "";
  valueTag.textContent = `${gridSlider.value} x ${gridSlider.value}`;
  for (let i = 0; i < gridSlider.value * gridSlider.value; i++) {
    const div = document.createElement("div");
    gridContainer.appendChild(div);
  }

  colorGrid();
}

function colorGrid(color) {
  const gridItems = document.querySelectorAll("#container div");
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("hover");
      item.style.backgroundColor = color;
      item.style.border = "none";
    });
  });
}

function resetGrid() {
  const gridItems = document.querySelectorAll("#container div");
  gridItems.forEach((item) => {
    item.classList.remove("hover");
    item.style.backgroundColor = "white";
  });
  generateGrid();
}

function changeColor() {
  chosenColor = colorPicker.value;
  colorGrid(chosenColor);
}

colorPicker.addEventListener("change", changeColor);
resetBtn.addEventListener("click", resetGrid);
gridSlider.addEventListener("input", generateGrid);

generateGrid();
