let form = document
  .getElementById("form")
  .addEventListener("submit", createEmployee);
let addUserBtn = document.getElementById("addUser");
let tableBody = document.querySelector("tbody");
let tableFoot = document.querySelector("tfoot");
let idGenerator = 0;

let empArr = [];

function isTableEmpty() {
  let noOfObjects = tableBody.querySelectorAll("tr").length;
  if (noOfObjects == 0) {
    tableFoot.innerText = "You have 0 Employees";
  } else {
    tableFoot.innerText = "";
  }
}
isTableEmpty();

function createEmployee(e) {
  e.preventDefault();
  let empName = document.getElementById("name").value;
  let empProf = document.getElementById("profession").value;
  let empAge = document.getElementById("age").value;
  let newEmp = {
    id: ++idGenerator,
    name: empName,
    profession: empProf,
    age: empAge,
  };
  if (empName.length > 0 && empProf.length > 0 && empAge.length > 0) {
    let success = document.querySelector("#msg");
    success.innerHTML = "Success: Employee Added!";
    success.style.color = "green";
    empArr.push(newEmp);
    getEmployees(empArr);
    isTableEmpty();
    document.getElementById("form").reset();
  } else {
    let fail = document.querySelector("#msg");
    fail.innerHTML =
      "Error : Please Make sure All the fields are filled before adding in an employee !";
    fail.style.color = "red";
  }
}

function getEmployees(empArr) {
  tableBody.innerHTML = "";
  empArr.map((element, index) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = element.id;
    let td2 = document.createElement("td");
    td2.textContent = "Name: " + element.name;
    let td3 = document.createElement("td");
    td3.textContent = "Profession: " + element.profession;
    let td4 = document.createElement("td");
    td4.textContent = "Age: " + element.age;
    let td5 = document.createElement("td");
    let delButton = document.createElement("button");
    delButton.textContent = "Delete User";
    td5.append(delButton);
    delButton.addEventListener("click", function () {
      deleteEmployee(element, index);
    });
    row.append(td1, td2, td3, td4, td5);
    tableBody.append(row);
  });
}

function deleteEmployee(element, index) {
  document.querySelector("#msg").innerHTML = "";
  empArr.splice(index, 1);
  getEmployees(empArr);
  isTableEmpty();
}