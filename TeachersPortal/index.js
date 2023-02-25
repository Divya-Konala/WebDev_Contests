const nameRegex=/^[a-zA-Z]+\s[a-zA-Z\s]+$/;
const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let currUser=JSON.parse(localStorage.getItem("currentUser"));
let fullName=document.querySelector("#fullName");
let email=document.querySelector("#email");
let password=document.querySelector("#pwd");
let confirm=document.querySelector("#cnfPwd");
let err=document.querySelector("#errMsg");

(()=>{
    if(currUser!=null){
        window.location.href="./dashboard.html";
    }
})();
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    let submit=validateData();
    if(submit){
        submitForm();
    }
});

function submitForm(){
    let teachers=JSON.parse(localStorage.getItem("users"))||[];
    let user={
        email: email.value,
        pass: password.value,
        name: fullName.value
    }
    teachers.push(user);
    localStorage.setItem("users",JSON.stringify(teachers));
    window.location.href="./login.html";
}

function validateData() {
    err.textContent="";
    let name=fullName.value;
    let mailId=email.value;
    let pwd=password.value;
    let cnf=confirm.value;
    if(nameRegex.test(name) && emailRegex.test(mailId) && pwdRegex.test(pwd) && pwd===cnf){
        return true;
    }
    else if(!nameRegex.test(name))
        err.textContent="Name should consist of a first name and last name. Only letters of alphabet allowed";
    else if(!emailRegex.test(mailId))
        err.textContent="Not a Valid MailId";
    else if(!pwdRegex.test(pwd))
        err.textContent="Password: Min. 8 characters and must contain: one upper case letter, one lower case letter, a number and a special character.";
    else
        err.textContent="Password - Confirm Password Mismatch";
    return false;
}