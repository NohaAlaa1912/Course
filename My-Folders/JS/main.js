var empolyees =
[
    {name:"ahmed",age:"25",salary:"6000",phone:"010155545"},
    {name:"soha",age:"20",salary:"6500",phone:"0109999545"},
    {name:"omar",age:"15",salary:"69990",phone:"010045545"},
    {name:"sameh",age:"66",salary:"6000",phone:"010155545"},
    {name:"merna",age:"70",salary:"6000",phone:"010155545"},
]

var addbtn=document.getElementById("addbtn");
var nameInput=document.getElementById("name");
var ageInput=document.getElementById("age");
var salaryInput=document.getElementById("salary");
var phoneInput=document.getElementById("phone");
var inputs=document.getElementsByClassName("form-control");
var employeeIndex;
var empolyees=[];
addbtn.onclick=function() {
    addemployee();
    displaydata();
    resetform()
}
  

    function addemployee(){
    var empolyee=
    {
       name:nameInput.value,
       age:ageInput.value,
       salary:salaryInput.value,
       phone:phoneInput.value,
   }
   empolyees.push(empolyee);
   localStorage.setItem("employeeslist" , JSON.stringify (empolyee))
   displaydata();
    }

    function displaydata(){
    var box="";
    for( var i=0;i<empolyees.length;i++)
    {
        box+=`
        <tr>
        <td>${empolyees[i].name}</td>
        <td>${empolyees[i].age}</td>
        <td>${empolyees[i].salary}</td>
        <td>${empolyees[i].phone}</td>
        <td><button onclick="updateEmployee(${[i]})" class="btn btn-outline-warning">update</button></td>
        <td> <button onclick='deleteemployee(${i})' class="btn btn-danger"> delete</button> </td>
        </tr>
        `
    }
    document.getElementById("tablebody").innerHTML=box
}

function resetform() {
    for (var i= 0; i<inputs.length; i++) {
        inputs[i].value=""
    }
}
function deleteemployee(index){
    empolyees.splice(index,1);
    displaydata()

}

function search(searchtxt) {
    var box="";
    for( var i=0;i<empolyees.length;i++)
    if(empolyees[i].name.toLowerCase().includes(searchtxt.toLowerCase()))
    {
        box+=`
        <tr>
        <td>${empolyees[i].name}</td>
        <td>${empolyees[i].age}</td>
        <td>${empolyees[i].salary}</td>
        <td>${empolyees[i].phone}</td>
        <td><button onclick="updateEmployee(${[i]})" class="btn btn-outline-warning">update</button></td>
        <td> <button onclick='deleteemployee(${i})' class="btn btn-danger"> delete</button> </td>
        </tr>
        `
    }
    document.getElementById("tablebody").innerHTML=box
}


function updateEmployee(employeeIndex)
 {
   
    nameInput.value=  empolyees[employeeIndex].name;
    ageInput.value=  empolyees[employeeIndex].age;
    salaryInput.value=  empolyees[employeeIndex].salary;
    phoneInput.value=  empolyees[employeeIndex].phone;

    addbtn.innerHTML= "Update";
    
    addbtn.onclick= function() {

        empolyees[employeeIndex].name = nameInput.value;
        empolyees[employeeIndex].age =ageInput.value;
        empolyees[employeeIndex].salary =salaryInput.value;
        empolyees[employeeIndex].phone =phoneInput.value;

        localStorage.setItem("employeeslist" , JSON.stringify (empolyees));
        displaydata();
        resetform();

        addbtn.onclick = addemployee;
    }
 }