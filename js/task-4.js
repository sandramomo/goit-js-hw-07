const form = document.querySelector(".login-form");
form.addEventListener("submit", formLoginSubmitHandler);
const alert = "All form fields must be filled in";

function formLoginSubmitHandler(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = form.elements.password.value;
  const userInfo = {
    email: email,
    password: password,
  };
  if (email.trim() === "" || password.trim() === "") {
    console.log(alert);
  } else {
    console.log(userInfo);
    console.log(`User email: ${email}. User password: ${password}`);
    form.reset();
  }
}
