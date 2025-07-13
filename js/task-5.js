
const spanElem = document.querySelector('.color'); 
const bodyElem = document.querySelector('body');
const btnElem = document.querySelector('.change-color');
btnElem.addEventListener('click', handleBodyElemClick);
function handleBodyElemClick(event) {
  spanElem.textContent = getRandomHexColor();
  bodyElem.style.backgroundColor = spanElem.textContent;
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}