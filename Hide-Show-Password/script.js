let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function () {
  if (password.type === "password") {
    password.type = "text"; //by default the password is hidden because the type is password and we are changing it to text
    eyeicon.src = "images/eye-open.png";
  } else {
    password.type = "password";
    eyeicon.src = "images/eye-close.png";
  }
};
