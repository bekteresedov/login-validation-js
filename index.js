let username = document.getElementById("username");
let password = document.getElementById("password");
let button = document.getElementById("button");
let apple = document.getElementById("apple");

button.onmouseover = function () {
  if (username.value.trim().length < 3 || password.value.trim().length < 8) {
    apple.classList.toggle("left");
  } else {
    alert("Welcome !!");
  }
};

console.log(left.innerHTML);
