const data = require('./../Data/data.json');

exports.getDefault = function(request, response){
    response.send('You are on root route, from controller');
}

exports.getEmployees = function(request, response) {
    response.send(data);
    }

exports.addNewEmployee = function(request, response) {
    let empName = request.body.empName;
    let empPwd = request.body.empPwd;
    response.end(`Post success , you sent ${empName} and ${empPwd}, Thanks!`);
}