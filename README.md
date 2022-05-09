# HR-management-system

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