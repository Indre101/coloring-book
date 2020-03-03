window.addEventListener("DOMContentLoaded", init);

const HTML = {}


function getHTMLelements() {

  HTML.imageTemplate = document.querySelector(".imageTemplate");
  HTML.colorSwatches = document.querySelectorAll(".colorSwatch");
  HTML.pickedColor = document.querySelector(".pickedColor");
  HTML.spacesToColorIn = document.querySelectorAll("[data-name=coloring-space]");
  HTML.bookCover = document.querySelector(".bookCover");
}

async function init() {
  getHTMLelements();

  const getSVG = await fetch("./cat.svg");
  const response = await getSVG.text();
  HTML.imageTemplate.innerHTML = response;
  assignDifferentColors();
  getColorChoice();
  colorTheArea();
}

const assignDifferentColors = () => HTML.colorSwatches.forEach(swatch => (swatch.style.fill = `rgb(${getRandomRGBColor().r}, ${getRandomRGBColor().g}, ${getRandomRGBColor().b})`));

const getRandomRGBColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return {
    r,
    g,
    b
  };
};

const getColorChoice = () => {
  HTML.colorSwatches.forEach(colorChoice => colorChoice.addEventListener("click", pickUpColor));
};

let colorPick;
let counter = 0;

const pickUpColor = () => {
  colorPick = event.target.style.fill;
  HTML.pickedColor.style.backgroundColor = colorPick;
  return colorPick;
};

function colorTheArea() {

  HTML.spacesToColorIn.forEach(colorArea => colorArea.addEventListener("click", executeColorIng));
}

const executeColorIng = () => {
  event.target.style.fill = colorPick;
  counter++;


};


HTML.bookCover.onclick = function () {
  HTML.bookCover.dataset.clicked = "true";
}