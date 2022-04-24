`use strict`
let sectionEl = document.getElementById("cardSection");
//console.log(sectionEl);

let formEl = document.getElementById("formID");
//console.log(formEl);

let empArr = [];

function Employee(id, full_name, department, level, image_URL, salary) {
    this.id = this.generateID();
    this.full_name = full_name;
    this.department = department;
    this.level = level;
    this.image_URL = image_URL;
    this.salary = this.calculating();

    empArr.push(this);
}
Employee.prototype.calculating = function () {
    if (this.level === "Senior") {
        return Math.floor((Math.random() * (2000 - 1500 + 1) + 1500) * 7.5);
    } else if (this.level === "Mid-Senior") {
        return Math.floor((Math.random() * (1500 - 1000 + 1) + 1000) * 7.5);
    } else if (this.level === "Junior") {
        return Math.floor((Math.random() * (1000 - 500 + 1) + 500) * 7.5)
    }
}
Employee.prototype.generateID = function(){
 return (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
}
Employee.prototype.render = function () {
    // console.log(this.full_name);
    // document.write(`<h1> this is the name of Employee: ${this.full_name}
    //     the salary is: ${this.salary} </h1>`);

    let imageEl = document.createElement('img');
    imageEl.src= this.image_URL;
    imageEl.alt ="profile pic";
    sectionEl.appendChild(imageEl);
    imageEl.style.width = "70px";
   
 let full_name = document.createElement('h3');
 full_name.textContent = this.full_name;
 sectionEl.appendChild(full_name); 

 let id = document.createElement('h4');
 id.textContent = this.id;
 sectionEl.appendChild(id); 
 
 let department = document.createElement('p');
 department.textContent = this.department;
 sectionEl.appendChild(department);
 
 let level = document.createElement('p');
 department.textContent = this.level;
 sectionEl.appendChild(level);
 
 let salary = document.createElement('p');
 salary.textContent = this.salary;
 sectionEl.appendChild(salary);
}
// Employee.prototype.render = function(){

//     let full_name = document.createElement('h3');
//     full_name.textContent = this.full_name;
//     sectionEl.appendChild(full_name); 
 
//  let department = document.createElement('p');
//  department.textContent = this.department;
//  sectionEl.appendChild(department);
 
//  let level = document.createElement('p');
//  department.textContent = this.level;
//  sectionEl.appendChild(level);
 
 
//  let imageEl = document.createElement('img');
//  imageEl.src= this.image_URL;
//  sectionEl.appendChild(imageEl);
//  imageEl.style.width = "70px";
 
//  }
 

let Ghazi_Samer = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "./assets/Emp Image.jpg");
let Lana_Ali = new Employee(1001, "Lana Ali", "Finance", "Senior","./assets/Emp Image.jpg");
let Tamara_Ayoub = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior","./assets/Emp Image.jpg");
let Safi_Walid = new Employee(1003,"Safi","Walid","Administration","Mid-Senior","./assets/Emp Image.jpg");
let Omar_Zaid = new Employee(1004,"Omar Zaid","Development","Senior","./assets/Emp Image.jpg");
let Rana_Saleh = new Employee(1005,"Rana Saleh","Development","Junior","./assets/Emp Image.jpg");
let Hadi_Ahmad = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senio","./assets/Emp Image.jpg");


function renderAll() {
for (let i = 0; i < empArr.length; i++) {
    empArr[i].render();
}

}
renderAll();
console.log(empArr);
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();

   console.log("Form event",event);
  let image_URL = event.target.image.value;
  let id = Employee.prototype.generateID();
  let fullName = event.target.fullName.value;
  let department = event.target.department.value;
  let level = event.target.level.value;
  let salary=Employee.prototype.calculating();

  let newEmp = new Employee(id,fullName,department,level,image_URL,salary);
  newEmp.render();


  saveData(empArr);

  console.log(newEmp);
}


// selectList.addEventListener("change", function(){
//     console.log(selectList.options[selectList.selectedIndex].value);
// });


function saveData(data){
    let stringfiyData = JSON.stringify(data);
    localStorage.setItem("employee",stringfiyData);
}

function gitData(){
    let retrivedData = localStorage.getItem("employee");
    let arrayData = JSON.parse(retrivedData);
    if (arrayData != null) {

      for (let i = 0; i < arrayData.length; i++) {
        new Employee(arrayData[i].id,arrayData[i].fullName,arrayData[i].department,arrayData[i].level,arrayData[i].imageEl,arrayData[i].salary);
        
      }
    }
    renderAll();
}
gitData();