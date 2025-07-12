const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
const nameChange = () => {
  span.textContent = input.value.trim();
  span.style.color = 'palevioletred';
  if (input.value === "") {
    span.textContent = "Anonymous";
    span.style.color = "black";
  }
};
input.addEventListener("input", nameChange);
