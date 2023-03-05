const _loginForm = document.querySelector("#login-form");
const _loginInput = _loginForm.querySelector("input");
const _greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(evt) {
  evt.preventDefault();
  _loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = _loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  _greeting.innerText = `Hello, ${username}`;
  _greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  _loginForm.classList.remove(HIDDEN_CLASSNAME);
  _loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
