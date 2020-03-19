const fs = require('fs');
const rfs= require('rotating-file-stream');
const path = require('path');
const logDirectory = path.join(__dirname,'../production_logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const  accessLogStream = rfs('access.log',{
    interval : 'id',
    path: logDirectory
});

const development={
    name : 'development',
    asset_path: './assets',
    session_cookie_key = 'blahsomething',
    db: 'codeial_production',
    smtp={
        services: 'gmail',
    host : 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
        user: 'ayushk12',
        pass: 'ayushk05'
    }
},

google_clientID: "326050478000-r5cdo0ltg07luthvlmqgtj1dn28i5mbp.apps.googleusercontent.com",
google_clientSecret: "am2Ulm2WWfSP7bLYq0O3pNt5",
google_callbackURL : "http://codeial.com/users/auth/google/callback",
jwt_secret = 'codeial',
morgan :{
    mode : 'dev',
    options: { stream: accessLogStream}
}

}

const production ={
    name: 'production',
    asset_path: process.env.CODEIAL_ASSET_PATH,
    session_cookie_key ='NGXrctm7vBHGPNr81yNb1DAM2m0KoXhg' ,
    db: 'codeial_development',
    smtp={
        services: 'gmail',
    host : 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
        user: 'ayushk12',
        pass: 'ayushk05'
    }
},
google_clientID: process.env.CODEIAL_GOOGLE_CLIENT_ID,
google_clientSecret: process.env.CODEIAL_GOOGLE_CLIENT_SECRET,
google_callbackURL : process.env.CODEIAL_GOOGLE_CLIENT_CALLBACK_URL,
jwt_secret = process.env.CODEIAL_JWT_SECRET,
 morgan :{
    mode : 'combined',
    options: { stream: accessLogStream}
}


}

module.exports = eval(process.env.CODEIAL_ENVIRONMENT)==undefined ? development : eval(process.env.CODEIAL_ENVIRONMENT);