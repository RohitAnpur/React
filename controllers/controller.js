const data = require('./../Data/data.json');
const Employee=require('./../models/employee');

exports.getDefault = function(request, response){
    response.send('You are on root route, from controller');
}

exports.getEmployees = function(request, response) {
    //response.send(data);
    Employee.find({},function(err, results ){

        if (err)
        response.end(err);
        response.json(results);
    })
    };

exports.addNewEmployee = function(request, response) {
    let empName = request.body.empName;
    let empPwd = request.body.empPwd;
    response.end(`Post success , you sent ${empName} and ${empPwd}, Thanks!`);
}
