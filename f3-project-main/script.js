let elements=document.querySelectorAll(".restricted");
for(let i=0;i<elements.length;i++){
    elements[i].addEventListener(("click"),(e)=>{
        e.preventDefault();
        // console.log("add event listner called");
        let currUser=JSON.parse(localStorage.getItem("shopMeCurrUser"));
        // console.log(currUser!=null);
        if(currUser!=null)
            window.location.href=elements[i].href;
        else
            window.location.href="./pleaseLogin.html";
    })
}