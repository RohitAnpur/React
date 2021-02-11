const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/Weights',{
        useNewUrlParser: true,
    useUnifiedTopology: true

    }
    
);

//
const empSchema = new mongoose.Schema({
    empName : String, 
    empPwd : String,
    createdOn: {type:Date, default: Date.now}
},{
    collection: 'Employee'
});
//clear
module.exports=mongoose.model('Employee',empSchema);