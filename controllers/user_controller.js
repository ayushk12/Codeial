const user= require('../models/user');
module.exports.profile= function(req,res){
     return res.end('user_profile',{
         title: 'User Profile'
     })
}


//render the sign up page
module.exports.signup=function(req,res){
    return res.render('user_sing_up',{
        title: "Cddeial | Sign up"
    })
}


//render the sign in page
module.exports.signIn=function(req,res){
    return res.render('user_sing_in',{
        title: "Cddeial | Sign In"
    })
}

// get the sign up data

module.exports.create= function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return  res.redirect('back');
    }
    user.findOne({email: req.body.email},function(err,user){
        if(err){console.log('error in finding in signing up');
        return;
    }
    if(!user){
        user.create(req.body,function(err,user){
            if(err){console.log('error  in cresting user while up');return}
            return  res.redirect('/users/sign-in');
        })
    }   else{
        return  res.redirect('value');
    }
    })
    
}

// sign in and create a session for the user
module.exports.createSession=function(req,res){
    return res.render('user_sing_up',{
        title: "Cddeial | Sign Up"
    })
}