`use strict`

let empArr = [];

function Employee(id, full_name, department, level, image_URL, salary) {
    this.id = id;
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


// 1004		Development	
// 			
// 1006		Finance	
let Ghazi_Samer = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "./assets/emp imagge.jpg");
let Lana_Ali = new Employee(1001, "Lana Ali", "Finance", "Senior");
let Tamara_Ayoub = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let Safi_Walid = new Employee(1003,"Safi","Walid","Administration","Mid-Senior");
let Omar_Zaid = new Employee(1004,"Omar Zaid","Development","Senior");
let Rana_Saleh = new Employee(1005,"Rana Saleh","Development","Junior");
let Hadi_Ahmad = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senio");

Employee.prototype.render = function () {
    console.log(this.name);
    document.write(`<h1> this is the name of Employee: ${this.full_name}
        the salary is: ${this.salary} </h1>`);

}
Ghazi_Samer.render();
console.log(empArr);
console.log(Ghazi_Samer.salary);