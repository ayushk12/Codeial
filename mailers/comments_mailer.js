const nodeMailer =require('../config/nodemailer');


// newComment = function
//module.exports = newComment

// this is another way of exporting a method 
exports.newComment = (comment)=>{
    
    let htmlString = nodeMailer.renderTemplate({comment:comment},'/comments/new_comment.ejs')

    nodeMailer.transporter.sendMail({
        from: 'kayush242@gmail.com',
        to: comment.user.email,
        subject: "New comment publish",
        html: htmlString
    },(err,info)=>{
        if(err){
            console.log("error in sending mail",err);
            return;
        }
        console.log('Message sent',info);
        return;
    });
}