function getEmployeeInfo(employeeName) {
    let employees = ["Ivan", "Harry", "Bob", "Tom", "Yury"];
    let salaries = [5000, 750, 4000, 1500, 3600];
    let index = employees.indexOf(employeeName);
    if (index !== -1) {
        let employeeInfo = [];
        employeeInfo.push(employees[index], salaries[index]);
        return employeeInfo;
    } else {
        return null;
    }
}

console.log(getEmployeeInfo("Yury"));
console.log(getEmployeeInfo("Anne"));
