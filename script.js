const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailadd = document.getElementById("emailAdd");
const password = document.getElementById("password");
const button = document.getElementById("button");

//calling the button id
button.addEventListener("click", function () {
  button.textContent = "Form  must be completed";
});
