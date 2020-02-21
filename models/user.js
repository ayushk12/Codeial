//for creating schema

const mongoose= require('mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,  // without an having email value the user cannot create a databse the mongoose throw an error
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
},{
    timestamps: true  // created at and updated it will 
});

const User= mongoose.model('User',userSchema);
module.exports= User; // export is necessary