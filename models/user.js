//for creating schema

const mongoose= require('mongoose');

const multer= require('multer');
const path= require('path');
const AVATAR_PATH = path.join('/uploads/users/avatars');

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
    },
    avatar: {
        type: String
    }
},{
    timestamps: true  // created at and updated it will 
});

let storage= multer.diskStorage({
    destination: function(req,file,cb){
      cb(null, path.join(__dirname, '..',AVATAR_PATH));
    },
    filename: function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now())
    }
});

// static methods
userSchema.statics.uploadedAvatar = multer({storage: storage}).single('avatar');
userSchema.statics.avatarPath = AVATAR_PATH;

const User= mongoose.model('User',userSchema);
module.exports= User; // export is necessary