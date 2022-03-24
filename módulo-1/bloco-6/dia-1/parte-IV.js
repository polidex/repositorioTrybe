// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function trybe(event) {
  event.preventDefault();
}

function input(event) {
  event.preventDefault();
}

function keypress(event) {
  let x = event.key;
  if (x !== "a") {
    event.preventDefault();
  }
}
HREF_LINK.addEventListener('click', trybe);
INPUT_CHECKBOX.addEventListener('click', input);
INPUT_TEXT.addEventListener('keypress', keypress);