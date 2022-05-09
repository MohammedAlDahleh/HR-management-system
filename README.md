# HR-management-system

**Add a form**
Home page
   add a form with this fields:
    Full name
    Department options:
       Administration
       Marketing
       evelopment
       Finance
    Level  options:
       Junior
       Mid-Senior
       Senior
       Image url
    Submit button

**Generate for ID Number**
Create a function to generate a unique id number for each employee .
---
Employee.prototype.generateID = function(){
 return (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
}
---

**Add an event listener to get the data from the form**
---
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
  console.log(newEmp);
}
---

**Create function render prototype to see employee information in a separate card in the home page**
---
Employee.prototype.render = function () {

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
---

**Add Styling**
1. Add some style for the header and the footer
2. Add backgrounds, font colors, google fonts and any additional style.