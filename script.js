window.addEventListener("DOMContentLoaded", init);

function getHTMLelements(params) {}

async function init() {
  const getSVG = await fetch("./cat.svg");
  const response = await getSVG.text();
  document.querySelector(".imageTemplate").innerHTML = response;
  assignDifferentColors();
  getColorChoice();
  colorTheArea();
}

const assignDifferentColors = () =>
  document
  .querySelectorAll(".colorSwatch")
  .forEach(
    swatch =>
    (swatch.style.fill = `rgb(${getRandomRGBColor().r}, ${
          getRandomRGBColor().g
        }, ${getRandomRGBColor().b})`)
  );

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
  document
    .querySelectorAll(".colorSwatch")
    .forEach(colorChoice => colorChoice.addEventListener("click", pickUpColor));
};

let colorPick;

const pickUpColor = () => {
  colorPick = event.target.style.fill;
  document.querySelector(".pickedColor").style.backgroundColor = colorPick;
  return colorPick;
};

function colorTheArea() {
  document
    .querySelectorAll("[data-name=coloring-space]")
    .forEach(colorArea => colorArea.addEventListener("click", executeColorIng));
}

const executeColorIng = () => {
  console.log("object");
  console.log(colorPick);

  event.target.style.fill = colorPick;
};