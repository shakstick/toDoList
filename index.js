// INITS
const addBtn = document.querySelector("button");
let xMouse, yMouse;
const input = document.querySelector("input");
input.focus();
const ul = document.querySelector("ul");

let crosses;

// WORKS
addBtn.addEventListener("mouseover", bg);
addBtn.addEventListener("click", createToDo);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    createToDo();
    input.value = "";
  }
});

setInterval(() => {
  crosses = document.querySelectorAll("i");
  crosses.forEach((cross) => {
    cross.addEventListener("click", removeToDo);
  });
}, 1000);

// FUNCTIONS
function bg(e) {
  xMouse = e.clientX - addBtn.offsetLeft + "px";
  yMouse = Math.abs(addBtn.offsetTop - e.clientY) + "px";

  addBtn.style.setProperty("--yPos", yMouse);
  addBtn.style.setProperty("--xPos", xMouse);
}

function createToDo() {
  const h2 = document.createElement("h2");
  const text = document.createTextNode(input.value);
  h2.appendChild(text);
  const li = document.createElement("li");
  const i = document.createElement("i");
  i.setAttribute("aria-hidden", "true");
  i.classList.add("fa");
  i.classList.add("fa-times");
  li.appendChild(h2);
  li.appendChild(i);
  ul.appendChild(li);
  input.value = "";
}

function removeToDo() {
  this.parentElement.remove();
}
