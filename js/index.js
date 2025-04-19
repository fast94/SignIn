// select elements
// variables
// events

var link = document.querySelector(".link");
var link2 = document.querySelector(".link2");
var inputName = document.getElementById("inputName");
var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var logEmail = document.getElementById("logEmail");
var logPassword = document.getElementById("logPassword");
var input = document.querySelectorAll("input"); // to remove is-valid when signingup
var regButton = document.querySelector(".reg");
var logButton = document.querySelector(".log");
var success = document.querySelector(".success");
var header = document.querySelector("header");
var regName = /^[a-z0-9_-]{3,15}$/;
var regEmail = /^[a-z0-9_-]{3,15}@[a-z]{2,}\.com$/;
var regPassword = /^[a-z0-9-]{6,10}$/;
var dataBase = JSON.parse(localStorage.getItem("dataBase")) || [];

regButton.addEventListener("click", function () {
  if (
    validate(regName, inputName) &&
    validate(regEmail, inputEmail) &&
    validate(regPassword, inputPassword)
  ) {
    var info = {
      name: inputName.value,
      email: inputEmail.value,
      password: inputPassword.value,
    };
    dataBase.push(info);
    localStorage.setItem("dataBase", JSON.stringify(dataBase));
    console.log(dataBase);
    reset();
    success.classList.replace("d-none", "d-block");
    for (var i = 0; i < input.length; i++) {
      input[i].classList.remove("is-valid");
    }
  }
});
function validate(regex, input) {
  if (regex.test(input.value)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  }
  input.classList.add("is-invalid");
  input.classList.remove("is-valid");
  return false;
}

logButton.addEventListener("click", function () {
  success.classList.replace("d-block", "d-none");

  for (var i = 0; i < dataBase.length; i++) {
    console.log("as");

    if (
      logEmail.value == dataBase[i].email &&
      logPassword.value == dataBase[i].password
    ) {
      header.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-info shadow">
  <div class="container-fluid px-3">
    <a class="navbar-brand" href="#">Smart Login</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-danger">
          <a href="https://fast94.github.io/SignIn/" class="text-decoration-none text-white">Log out</a>
        </button>
      </form>
    </div>
  </div>
</nav>
<div
  class="container d-flex justify-content-center align-items-center flex-column"
>
  <h1 class="mt-5">Smart Login System</h1>
  <div class="w-75 box p-5 shadow">
    <h2 class="text-center">Welcome ${dataBase[i].name}</h2>
  </div>
</div>
`;
    }
  }
});

function reset() {
  inputName.value = null;
  inputEmail.value = null;
  inputPassword.value = null;
}

link.addEventListener("click", function () {
  inputName.classList.replace("d-none", "d-block");
  inputEmail.classList.replace("d-none", "d-block");
  inputPassword.classList.replace("d-none", "d-block");
  logEmail.classList.add("d-none");
  logPassword.classList.add("d-none");
  regButton.classList.replace("d-none", "d-block");
  logButton.classList.add("d-none");
  link.classList.replace("d-block", "d-none");
  link2.classList.replace("d-none", "d-block");
});

link2.addEventListener("click", function () {
  inputName.classList.replace("d-block", "d-none");
  inputEmail.classList.replace("d-block", "d-none");
  inputPassword.classList.replace("d-block", "d-none");
  logEmail.classList.remove("d-none");
  logPassword.classList.remove("d-none");
  regButton.classList.replace("d-block", "d-none");
  logButton.classList.remove("d-none");
  link2.classList.add("d-none");
  link.classList.replace("d-none", "d-block");
});
