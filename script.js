// greet the user
const greet = document.getElementById("greet");

greet.addEventListener("click", function() {
  const username = prompt("Hello, welcome to the site! What is your name?")

  alert("It's a pleasure to have you here " + username + "!")
})