const container = document.querySelector(".container");
const addButton = document.querySelector(".square__add");
let count = 0;

addButton.addEventListener("click", createSquare);

function createSquare() {
  const parentSquare = event.target.parentElement;

  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  parentSquare.style.background = `rgb(${r},${g},${b})`;
  parentSquare.removeChild(addButton);
  parentSquare.classList.remove("square__current");
  parentSquare.classList.add("square");

  const newSquare = document.createElement("div");
  newSquare.classList.add("square__current");
  newSquare.appendChild(addButton);
  parentSquare.appendChild(newSquare);
  if (count >= 8) {
    container.innerHTML = "";
    container.appendChild(newSquare);
    count = 0;
  } else {
    count++;
  }
}
