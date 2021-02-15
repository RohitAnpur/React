const data = require('./../Data/data.json');
const employee = require('./../models/employee');
//loading the employee
const Employee=require('./../models/employee');

const jwt=require('jsonwebtoken');

exports.loginuser = function(request, response){
    let empName = request.body.empName;
    let empPwd  = request.body.empPwd;

    Employee.find({empName:empName, function (err,results) {
        if (err) response.end(err);
        if (empPwd == results[0].empPwd){
            //return a token 

        } 
        else {
            response.send({status:"Logon Failed"})
        }
        
    }});
}

exports.getDefault = function(request, response){
    response.send('You are on root route, from controller');
}

exports.getEmployees = function(request, response) {
    //Below commented code line not to load the data from data.json file.instead use Mango DB.
    //response.send(data);
    Employee.find({},function(err, results ){

        if (err)
        response.end(err);
        response.json(results);
    })
    };

exports.addNewEmployee = function(request, response) {
    const Emp = new Employee();
    //chnaging the temporay holiding to employee object.
    Emp.empName = request.body.empName;
    Emp.empPwd = request.body.empPwd;
    Emp.save({},function( err, results){
        if (err)
        response.end(err);
        response.end(`Created ${Emp.empName}`)


    }
    );

    exports.addNewWeight = function(request, response) {
    
        let empName=request.body.empName;
        let empWeight = parseInt(request.body.empWeight);

        Employee.updateOne(
            {empName:empName},
            {$addToSet:{
                employeeWeights:{
                    empWeight:empWeight
                }
            }},
            {upsert:false},
            function(err, results){
                if (err){
                    return console.log(err);
                }else{
                    return results.send("done");
                }

            }


                );



    
}
}