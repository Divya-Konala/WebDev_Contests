const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let user=JSON.parse(localStorage.getItem("currentUser"));
document.querySelector("#name").textContent=user.name;
document.querySelector("#email").textContent=user.email;
let err=document.querySelector("#errMsg");

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    if(validateData())  update();
})

function update(){
    localStorage.setItem("currentUser",JSON.stringify(user));
    let teachers=JSON.parse(localStorage.getItem("users"));
    teachers.filter((teacher)=>{
        if(teacher.email==user.email){
            teacher.pass=user.pass;
        }
    })
    localStorage.setItem("users",JSON.stringify(teachers));
    err.textContent="Password Changed Successfully!";
    err.style.color="green";
    document.querySelector("form").reset();
}


function validateData(){
    err.textContent="";
    let oldPwd=document.querySelector("#oldPwd").value;
    let newPwd=document.querySelector("#pwd").value;
    let cnfPwd=document.querySelector("#cnfPwd").value;
    if(oldPwd==user.pass){
        if(pwdRegex.test(newPwd)){
            if(newPwd==cnfPwd){
                user.pass=newPwd;
                return true;
            }else{
                err.textContent="New Password - Confirm Password - Mismatch";
                return false;
            }
        }else{
            err.textContent="Password: Min. 8 characters and must contain: one upper case letter, one lower case letter, a number and a special character.";
            return false;
        }
    }else{
        err.textContent="Old Password: Incorrect Password";
        return false;
    }
}


document.querySelector("#logout").addEventListener("click",()=>{
    console.log("Logout");

    window.localStorage.removeItem('currentUser');
    window.location.href="./login.html";
})
