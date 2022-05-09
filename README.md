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
=======
**Home page**

1) Add Header for navigating.
2) Add Main to render the information for each employee.
3) Add Footer to some social media links with copyright (Terms,Privacy,Security...).

**Javascript**

1. create a constructor to generate an employee object and render it to main section.
--
function Employee(id, full_name, department, level, image_URL, salary) {
    this.id = this.generateID();
    this.full_name = full_name;
    this.department = department;
    this.level = level;
    this.image_URL = image_URL;
    this.salary = this.calculating();
}
--
2. create a prototype function for calculating the salary, and add tax 7.5.
--
Math.floor((Math.random() * (min - max + 1) + max) * 7.5);
--
3. create a render prototype function to render each employee name with their salary in the home page.

create employees instances.

**Accounting page**

Add Header for navigating.
Add Main section(create html table).
Add Footer to some social media links with copyright (Terms,Privacy,Security...).
=======

**Home page**
1) Add Header for navigating.
2) Add Main render the information for each employee from javascript.
3) Add Footer to some social media links with copyright.

**Javascript**
1) create a constructor to generate an employee object and render it to main section.
2) create a prototype function for calculating the salary, and add tax 7.5.
3) create a render prototype function to render each employee name with their salary in the home page.
4) create employees instances.

**Accounting page**
1) Add Header for navigating.
2) Add Main section.
3) Add Footer to some social media links with copyright.

