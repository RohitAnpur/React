
const controller = require('./../controllers/controller');
module.exports= function(app) {
    app.get('/getemployees', controller.getEmployees);
    app.get('/', controller.getDefault);   
    app.post('/addnewemployee', controller.addNewEmployee);
}
