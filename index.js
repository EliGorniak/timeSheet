// function getHighScores(cb) {
//     localforage.getItem("highScores").then(function (result) {
//         cb(result || []); //{name, score}
//     });
// }

function getEmployeeData(callback) {
    localforage.getItem("employee-data").then(function (result) {
        callback(result || []); //{employee-name, employee-role, start-date, months-worked, monthly-rate, total-billed}
    })
}
