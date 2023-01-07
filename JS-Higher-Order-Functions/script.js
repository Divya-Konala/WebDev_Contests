let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperswithMap() {
    console.log("Fetching developers using map function");
    arr.map(function (emp,index){
      if(emp.profession=="developer"){
        console.log(emp);
      }
    })
  
  }
  
  function PrintDeveloperbyForEach() {
    console.log("Fetching developers using forEach function");
    arr.forEach((emp,index) => {
      if(emp.profession==="developer"){
        console.log(emp);
      }
    })
  }
  
  function addData() {
    let new_emp={id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(new_emp);
    console.log("New Employee Added:",arr[arr.length-1]);
    console.log("Updated Array:",arr);
  }
  
  function removeAdmin() {
    arr=arr.filter(function (emp,index){
      if(emp.profession!=="admin")
        return emp;
      else{
        console.log("Removed Admin:",emp);
      }
    })
    console.log("Updated Array:",arr);
  }
  
  function concatenateArray() {
    let new_arr = [
      { id: 5, name: "Adam", age: "25", profession: "UI designer" },
      { id: 6, name: "Betty", age: "21", profession: "tester" },
      { id: 7, name: "Charlie", age: "23", profession: "consultant" },
    ];
    arr=arr.concat(new_arr);
    console.log("Concatenated Array", arr);
  }