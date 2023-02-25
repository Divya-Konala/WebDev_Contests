let email=document.querySelector("#email");
let password=document.querySelector("#pwd");
let err=document.querySelector("#errMsg");
let currUser;
let teachers=JSON.parse(localStorage.getItem("users"));

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    let errMsg=validateData();
    if(errMsg==""){
        login();
    }else{
        err.textContent=errMsg;  
    }
});

function login(){
    let user={
        email:currUser.email,
        pass:currUser.pass,
        name:currUser.name,
        token:generateToken()
    }
    localStorage.setItem("currentUser",JSON.stringify(user));
    window.location.href="./dashboard.html";
}

function generateToken(){
    const capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const small="abcdefghijklmnopqrstuvwxyz";
    const num="013456789";
    const special="!@#$%^&*()_+?-";
    const characters=capital+small+num+special;
    let token="";
    for(let i=0;i<16;i++){
        let random=Math.floor(Math.random()*characters.length);
        token+=characters[random];
    }
    return token;
}
function validateData(){
    err.textContent="";
    let errMsg="User Not Found!";
    let mailId=email.value;
    let pwd=password.value;
    teachers.map((teacher)=>{
        if(teacher.email==mailId){
            errMsg="Incorrect Password";
            if(teacher.pass==pwd){
                currUser=teacher;
                errMsg="";
                return errMsg;
            }
        }
    })
    return errMsg;
}