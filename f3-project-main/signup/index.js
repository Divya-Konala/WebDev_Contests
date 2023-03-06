const firstNameRegex=/^[a-zA-Z]/;
const lastNameRegex = /^[A-Za-z]/;
const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let currUser=JSON.parse(localStorage.getItem("shopMeCurrUser"));
let firstName=document.querySelector("#firstName");
let lastName=document.querySelector("#lastName");
let email=document.querySelector("#email");
let password=document.querySelector("#pwd");
let confirm=document.querySelector("#cnfPwd");
let err=document.querySelector("#errMsg");
let existingUsers=JSON.parse(localStorage.getItem("shopMeUsers"))||[];

let restrictedElements=document.querySelectorAll(".restricted");
for(let i=0;i<restrictedElements.length;i++){
    restrictedElements[i].addEventListener(("click"),(e)=>{
        e.preventDefault();
        console.log("add event listner called");
        let currUser=JSON.parse(localStorage.getItem("shopMeCurrUser"));
        console.log(currUser!=null);
        if(currUser!=null)
            window.location.href=restrictedElements[i].href;
        else
            window.location.href="../pleaseLogin.html";
    })
}

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    let submit=validateData();
    if(submit){
        submitForm();
    }
});


function submitForm(){
    let shopUsers=JSON.parse(localStorage.getItem("shopMeUsers"))||[];
    let user={
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    }
    shopUsers.push(user);
    localStorage.setItem("shopMeUsers",JSON.stringify(shopUsers));
    window.location.href="../login/index.html";
}

function validateData() {
    err.textContent="";
    let fName=firstName.value;
    let lName=lastName.value;
    let mailId=email.value;
    let pwd=password.value;
    let cnf=confirm.value;
    if(firstNameRegex.test(fName) && lastNameRegex.test(lName) && emailRegex.test(mailId) && pwdRegex.test(pwd) && pwd===cnf){
        if(!isExistingUser(mailId))   return true;
    }
    else if(!firstNameRegex.test(fName))
        err.textContent="Only letters of alphabet allowed for first name";
    else if(!firstNameRegex.test(lName))
        err.textContent="Only letters of alphabet allowed for last name";
    else if(!emailRegex.test(mailId))
        err.textContent="Not a Valid MailId";
    else if(!pwdRegex.test(pwd))
        err.textContent="Password: Min. 8 characters and must contain: one upper case letter, one lower case letter, a number and a special character.";
    else
        err.textContent="Password - Confirm Password Mismatch";
    return false;
}

function isExistingUser(mailId){
    existingUsers.filter((existingUser)=>{
        if(existingUser.email==mailId) return true;
    })

}