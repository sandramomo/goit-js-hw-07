const form = document.querySelector(".login-form");
addEventListener("submit", formLoginSubmitHandler);

function formLoginSubmitHandler(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = form.elements.password.value;
  console.log(password);
  const userInfo = {
    email: email,
    password: password,
  };
  if (email === "" || password === "") {
    console.log("All form fields must be filled in");
  } else {
    console.log(userInfo);
    console.log(`User email: ${email}. User password: ${password}`);
    form.reset();
  }
}
