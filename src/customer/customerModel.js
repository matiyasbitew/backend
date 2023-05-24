var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var customerSchema = new Schema({
    first_name:{
        type: String,
        require:true
    },
    lastname:{
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    reason: {
        type:String,
        require: true
    },
    
    email:{
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

module.exports=mongoose.model('customer', customerSchema);