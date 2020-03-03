window.addEventListener("DOMContentLoaded", init)

function getHTMLelements(params) {

}


async function init() {
  const getSVG = await fetch("./cat.svg");
  const response = await getSVG.text();
  document.querySelector(".imageTemplate").innerHTML = response;
  assignDifferentColors()
}

function assignDifferentColors() {
  document.querySelectorAll(".colorSwatch").forEach(swatch => swatch.style.fill = `rgb(${getRandomRGBColor().r}, ${getRandomRGBColor().g}, ${getRandomRGBColor().b})`);
}

function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return {
    r,
    g,
    b
  }
}