`use strict`
let tableEl = document.getElementById("tableID");
Employee.prototype.renderTable = function(){
    let tr = document.createElement("tr");
    tableEl.appendChild(tr);

    let tabelData = document.createElement("td");
    nameTd.textContent = this.department;
    tr.appendChild(nameTd);
}



function renderEmp() {
    for (let i = 0; i < empArr.length; i++) {
        empArr[i].renderTable();
    } 
}
renderEmp();
    