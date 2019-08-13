function getEmployeeData(cb) {
    localforage.getItem("employe-data").then(function (result) {
        cb(result || []); //{fill in with example info later}
    });
}

function setEmployeeData(newEmployeeData, cb) {
    localforage.setItem("employe-data", newEmployeeData).then(cb);
}

function handleEmployeeData(newEmployeeName, newRole, newStartDate, newMonthlyRate) {
    getEmployeeData(function (employeeData) {
        employeeData.push({
            employeeName: newEmployeeName,
            role: newRole,
            startDate: newStartDate,
            monthlyRate: newMonthlyRate
        });
        console.log(employeeData);
        setEmployeeData(employeeData, updateEmployeeData);
    });
}

function addData() {
    document.getElementById("submitButton").addEventListener("click", function(event) {
        const employeName = document.getElementById("employeeName").value;
        const role = document.getElementById("role").value;
        const startDate = document.getElementById("startDate").value;
        const monthlyRate = document.getElementById("monthlyRate").value;
        handleEmployeeData(employeName, role, startDate, monthlyRate);
        console.log("addData trigger");
    })
}

addData();

function updateEmployeeData() {
    //get container where data is supposed to go
    const employeeTable = document.getElementById("employee-table");
    const employeeTableBody = document.getElementById("employee-table-body");

    //create element for data
    const employeeTR = document.createElement("tr");
    //populate element with data
    getEmployeeData(function(employeeData) {
        //do stuff
        const employeeNameTD = document.createElement("td");
        const roleTD = document.createElement("td");
        const startDateTD = document.createElement("td");
        const monthsWorkedTD = document.createElement("td");
        const monthlyRateTD = document.createElement("td");
        const totalBilledTD = document.createElement("td");

        //get new employee data
        let employee = employeeData[employeeData.length - 1];
        
        //populate with info
        employeeNameTD.innerText = employee.employeeName;
        roleTD.innerText = employee.role;
        startDateTD.innerText = employee.startDate;
        monthsWorkedTD.innerText = "some text here";
        monthlyRateTD.innerText = employee.monthlyRate;
        totalBilledTD.innerText = "some more text";

        //append td to tr
        employeeTR.append(employeeNameTD);
        employeeTR.append(roleTD);
        employeeTR.append(startDateTD);
        employeeTR.append(monthsWorkedTD);
        employeeTR.append(monthlyRateTD);
        employeeTR.append(totalBilledTD);

        // append tr to table body
        employeeTableBody.append(employeeTR);
    })

    //append element ot container
}
// displayHighScores();

function renderEmployeeData() {
    // console.log("timer test")
    const employeeTableBody = document.getElementById("employee-table-body");
    getEmployeeData(function(employeeData) {
        // console.log(employeeData);
        employeeTableBody.innerHTML = "";
        for (let i = 0; i < employeeData.length; i++) {
            // console.log("employee data at",i,employeeData[i]);
            const employeeTR = document.createElement("tr");
            const employeeNameTD = document.createElement("td");
            const roleTD = document.createElement("td");
            const startDateTD = document.createElement("td");
            const monthsWorkedTD = document.createElement("td");
            const monthlyRateTD = document.createElement("td");
            const totalBilledTD = document.createElement("td");

            let employee = employeeData[i];

            //populate with info
            employeeNameTD.innerText = employee.employeeName;
            roleTD.innerText = employee.role;
            startDateTD.innerText = employee.startDate;
            monthsWorkedTD.innerText = "some text here";
            monthlyRateTD.innerText = employee.monthlyRate;
            totalBilledTD.innerText = "some more text";

            //append td to tr
            employeeTR.append(employeeNameTD);
            employeeTR.append(roleTD);
            employeeTR.append(startDateTD);
            employeeTR.append(monthsWorkedTD);
            employeeTR.append(monthlyRateTD);
            employeeTR.append(totalBilledTD);

            // append tr to table body
            employeeTableBody.append(employeeTR);
        }
    })
}

renderEmployeeData();

let renderUpdate = setInterval(renderEmployeeData, 500);

