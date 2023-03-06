// Write your script here
const firstNameRegex=/^[a-zA-Z]/;
const lastNameRegex = /^[A-Za-z]/;
const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let firstName=document.querySelector("#firstName");
let lastName=document.querySelector("#lastName");
let oldPassword=document.querySelector("#oldPwd");
let newPassword=document.querySelector("#newPwd");
let confirmPassword=document.querySelector("#cnfPwd");
let err=document.querySelector("#errMsg");

let user=JSON.parse(localStorage.getItem("shopMeCurrUser"));


document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    if(validateData())  update();
})

function update(){
    user.firstName=firstName.value;
    user.lastName=lastName.value;
    user.password=newPassword.value;
    localStorage.setItem("shopMeCurrUser",JSON.stringify(user));
    let users=JSON.parse(localStorage.getItem("shopMeUsers"));
    users.filter((item)=>{
        if(item.email==user.email){
            item.firstName=user.firstName;
            item.lastName=user.lastName;
            item.password=user.password;
        }
    })
    localStorage.setItem("shopMeUsers",JSON.stringify(users));
    err.textContent="Password Changed Successfully!";
    err.style.color="green";
    document.querySelector("form").reset();
}


function validateData(){
    err.textContent="";
    let fName=firstName.value;
    let lName=lastName.value;
    let oldPwd=oldPassword.value;
    let newPwd=newPassword.value;
    let cnfPwd=confirmPassword.value;
    if(user.password==oldPwd){
        if(firstNameRegex.test(fName) && lastNameRegex.test(lName)  && pwdRegex.test(newPwd) && newPwd===cnfPwd){
            return true;
       }
       else if(!firstNameRegex.test(fName))
           err.textContent="Only letters of alphabet allowed for first name";
       else if(!firstNameRegex.test(lName))
           err.textContent="Only letters of alphabet allowed for last name";
       else if(!pwdRegex.test(newPwd))
           err.textContent="Password: Min. 8 characters and must contain: one upper case letter, one lower case letter, a number and a special character.";
       else
           err.textContent="Password - Confirm Password Mismatch";
       return false;
    }else{
        err.textContent="Old Password: Incorrect!"
        return false;
    } 
}

document.querySelector("#logout").addEventListener("click",()=>{
    window.localStorage.removeItem('shopMeCurrUser');
    window.location.href="../index.html";
})

