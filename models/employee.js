const mongoose = require('mongoose');
//connecting mongoose DB , template provided by forum.
mongoose.connect(
    'mongodb://localhost:27017/Weights',{
        useNewUrlParser: true,
    useUnifiedTopology: true

    }
    
);

const weightSchema = new mongoose.Schema({
    empWeight : String, 
    weighedtOn: {type:Date, default: Date.now}
}
);
//Here we setting schema details and DB name.
const empSchema = new mongoose.Schema({
    empName : String, 
    empPwd : String,
    employeeWeights:[weightSchema],
    createdOn: {type:Date, default: Date.now}
},{
    collection: 'Employee'
});
//exporting the mangoose db values to contoller.
module.exports=mongoose.model('Employee',empSchema);