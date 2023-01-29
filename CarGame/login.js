document.querySelector("form").addEventListener("submit", loginFn);
var userDetails = JSON.parse(localStorage.getItem("Signupdetails"));
var loginUserDetails = JSON.parse(sessionStorage.getItem("LoginUsers")) || [];
function loginFn(e) {
  e.preventDefault();
  let user_mail = document.getElementById("email").value;
  let user_password = document.getElementById("password").value;
  for (let i = 0; i < userDetails.length; i++) {
    if (
      userDetails[i].email == user_mail &&
      userDetails[i].password == user_password
    ) {
      let message = document.querySelector(".msg");
      message.textContent = "Login Success :)";
      message.style.color = "green";
      let loginobj = {
        name: userDetails[i].name,
        email: user_mail,
        password: user_password,
        highestScore: userDetails[i].highestScore
      };
      loginUserDetails.push(loginobj);
      sessionStorage.setItem("LoginUsers", JSON.stringify(loginUserDetails));
      document.querySelector("form").reset();
      window.location.href = "./racingCar.html";
      break;
    } else {
      let message = document.querySelector(".msg");
      message.textContent = "Invalid Credentials!";
      message.style.color = "red";
    }
  }
}
