let email=document.querySelector("#email");
let password=document.querySelector("#pwd");
let err=document.querySelector("#errMsg");
let currUser;
let shopUsers=JSON.parse(localStorage.getItem("shopMeUsers"))||[];

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
        password:currUser.password,
        firstName:currUser.firstName,
        lastName:currUser.lastName,
        token:generateToken()
    }
    localStorage.setItem("shopMeCurrUser",JSON.stringify(user));
    window.location.href="../shop/index.html";
}

function generateToken(){
    let token=crypto.randomUUID();
    return token;
}
function validateData(){
    err.textContent="";
    let errMsg="User Not Found!";
    let mailId=email.value;
    let pwd=password.value;
    shopUsers.map((shopUser)=>{
        if(shopUser.email==mailId){
            errMsg="Incorrect Password";
            if(shopUser.password==pwd){
                currUser=shopUser;
                errMsg="";
                return errMsg;
            }
        }
    })
    return errMsg;
}