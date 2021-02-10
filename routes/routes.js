
const controller = require('./../controllers/controller');
module.exports= function(app) {

    app.route('/').get(controller.getDefault);  
    app.route('/getemployees').get(controller.getEmployees);     
    app.route('/addnewemployee').post(controller.addNewEmployee);
}
