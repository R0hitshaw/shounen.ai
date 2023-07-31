var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required:true
    },
    email:{
        type: String,   
        required: true
    },
    phonenumber:{
        type: Number,
        required: true
    },  
    gender:{
        type: String,
        Enum:['Male','Female'],
        required: true
    },
    country:{
        type: String,
        enum:['India','China','Japan','Malaysia'],
        required: true
    },
    password:{
        type: String,
        required: true
    },
    confirmpassword:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('users',userSchema);