document.querySelector("form").addEventListener("submit", SignupForm);
const nameRegex = /^[a-zA-Z]+\s[a-zA-Z\s]+$/;
const emailRgex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const pwdRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*#?&])/;
var userDetails = JSON.parse(localStorage.getItem("Signupdetails")) || [];
function SignupForm(e) {
  e.preventDefault();
  document.getElementById("nameErr").textContent = "";
  document.getElementById("mailErr").textContent = "";
  document.getElementById("pwdErr").textContent = "";
  document.getElementById("cnfpwdErr").textContent = "";
  let name = document.querySelector("#name").value;
  let emailID = document.querySelector("#email").value;
  let pwd = document.querySelector("#password").value;
  let cnfpwd = document.querySelector("#confirmpassword").value;
  if (
    nameRegex.test(name) &&
    emailRgex.test(emailID) &&
    pwdRegex.test(pwd) &&
    pwd != name &&
    pwd != emailID &&
    pwd == cnfpwd
  ) {
    let isUserExists = false;
    for (let i = 0; i < userDetails.length; i++) {
      if (userDetails[i].email == emailID) {
        document.getElementById("userExists").textContent =
          "Email ID already exists! Please ";
        document.getElementById("userExists").style.color = "red";
        let loginLink = document.createElement("a");
        loginLink.setAttribute("href", "./Login.html");
        loginLink.textContent = "Login";
        document.getElementById("userExists").append(loginLink);
        isUserExists = true;
        break;
      }
    }
    if (isUserExists == false) {
      var signupobj = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        highestScore: 0
      };
      userDetails.push(signupobj);
      localStorage.setItem("Signupdetails", JSON.stringify(userDetails));
      document.querySelector("form").reset();
      window.location.href = "./Login.html";
    }
  } else {
    if (!nameRegex.test(name)) {
      document.getElementById("nameErr").textContent =
        "Name should contain a firstName & lastName";
      document.getElementById("nameErr").style.color = "red";
    } else if (!emailRgex.test(emailID)) {
      document.getElementById("mailErr").textContent =
        "Please include @ symbol followed by domain name";
      document.getElementById("mailErr").style.color = "red";
    } else if (!pwdRegex.test(pwd) || pwd == name || pwd == emailID) {
      document.getElementById("pwdErr").textContent =
        "Passwords should have at least 1 capital letter, 1 small, 1 number and 1 special characters,and password cannot be the same as name or email";
      document.getElementById("pwdErr").style.color = "red";
    } else if (pwd != cnfpwd) {
      document.getElementById("cnfpwdErr").textContent =
        "Password doesn't match with confirmed password";
      document.getElementById("cnfpwdErr").style.color = "red";
    }
  }
}
