let colors=["#FFD4B2","#FF8E9E"];

let table=document.createElement("table");
let headingRow=document.createElement("tr");
let th1=document.createElement("th");
th1.textContent="Position";
let th2=document.createElement("th");
th2.textContent="Name";
let th3=document.createElement("th");
th3.textContent="email";
let th4=document.createElement("th");
th4.textContent="Score";
headingRow.append(th1,th2,th3,th4);
table.append(headingRow);
headingRow.style.backgroundColor=colors[0];
document.querySelector("fieldset").append(table);

let userDetails=JSON.parse(localStorage.getItem("Signupdetails"));
userDetails.sort((a,b)=>b.highestScore-a.highestScore);

for(let i=1;i<=3;i++){
    let row=document.createElement("tr");
    let td1=document.createElement("td");
    td1.textContent=i;
    let td2=document.createElement("td");
    td2.textContent=(userDetails[i-1]==undefined)?"undefined":userDetails[i-1].name;
    let td3=document.createElement("td");
    td3.textContent=(userDetails[i-1]==undefined)?"undefined":userDetails[i-1].email;
    let td4=document.createElement("td");
    td4.textContent=(userDetails[i-1]==undefined)?"undefined":userDetails[i-1].highestScore;
    row.append(td1,td2,td3,td4);
    row.style.backgroundColor=colors[i%2];
    table.append(row);
}
