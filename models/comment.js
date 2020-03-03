const mongoose= require('mongoose');

const commentSchema= new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    // comment belongs to a user
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    // include the array at ids of all comments in this post schema itself

    comments: [
         {
             
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
         }
     ]


 }, {
        timestamps: true

    
 
});

const Comment = mongoose.model('Comment',commentSchema);
module.exports= Comment;