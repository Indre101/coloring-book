window.addEventListener("DOMContentLoaded", init);



function getHTMLelements() {
  const HTML = {};

  HTML.imageTemplate = document.querySelector(".imageTemplate");
  HTML.colorSwatches = document.querySelectorAll(".colorSwatch");
  HTML.pickedColor = document.querySelector(".pickedColor");
  HTML.spacesToColorIn = document.querySelectorAll("[data-name=coloring-space]");
  return HTML;
}




async function init() {
  const getSVG = await fetch("./cat.svg");
  const response = await getSVG.text();
  handleSvg(response)
}


function handleSvg(response) {
  getHTMLelements().imageTemplate.innerHTML = response;
  assignDifferentColors();
  getColorChoice();
  colorTheArea();

}

const assignDifferentColors = () => getHTMLelements().colorSwatches.forEach(swatch => (swatch.style.fill = `rgb(${getRandomRGBColor().r}, ${getRandomRGBColor().g}, ${getRandomRGBColor().b})`));

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
  getHTMLelements().colorSwatches.forEach(colorChoice => colorChoice.addEventListener("click", pickUpColor));
};

let colorPick;
let counter = 0;

const pickUpColor = () => {
  colorPick = event.target.style.fill;
  getHTMLelements().pickedColor.style.backgroundColor = colorPick;
  return colorPick;
};

function colorTheArea() {
  getHTMLelements().spacesToColorIn.forEach(colorArea => colorArea.addEventListener("click", executeColorIng));
}

const executeColorIng = () => {
  counter++;

  console.log("counter");
  event.target.style.fill = colorPick;


};