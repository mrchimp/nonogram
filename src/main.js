import { Grid } from "./grid";

const gridSizeInput = document.getElementById("gridSize");
const goButton = document.getElementById("generateGrid");
const gridEl = document.getElementById("grid");
const crossButton = document.getElementById("crossButton");
const filledButton = document.getElementById("filledButton");
let grid;
let clickValue = 1;

goButton.addEventListener("click", populateGrid);
crossButton.addEventListener("click", () => {
  clickValue = 1;
});
filledButton.addEventListener("click", () => {
  clickValue = 2;
});

function populateGrid() {
  const size = +gridSizeInput.value;
  grid = new Grid(size);

  gridEl.innerHTML = "";
  gridEl.style.setProperty("--size", size);

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const button = document.createElement("button");
      button.addEventListener("click", onCellClick);
      button.dataset.row = row;
      button.dataset.col = col;
      button.dataset.value = 0;
      button.classList.add("cell");
      gridEl.append(button);
    }
  }
}

function onCellClick(e) {
  const col = e.target.dataset.col;
  const row = e.target.dataset.row;
  let oldValue = +e.target.dataset.value;
  let newValue;

  if (clickValue === 1) {
    if (oldValue === 1) {
      newValue = 0;
    } else {
      newValue = 1;
    }
  } else {
    if (oldValue === 2) {
      newValue = 0;
    } else {
      newValue = 2;
    }
  }
  e.target.dataset.value = newValue;
}

populateGrid();
