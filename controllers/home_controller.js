const Post = require('../models/post');
const User= require('../models/user');

module.exports.home=  async function(req,res){

    // populate the user at each post
    // applying assync and await 

    try{
        let posts=  await Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    });
    let users= await user.find({});

            return res.render('home',{
                title: " Codeial | Home",
                posts:posts,
                all_users: users
        });
    
    } catch(err){
        console.log('Error',err);
        return;

    }
   
       
        
    
   
}

