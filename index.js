const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
//connection for database
const db = require("./config/mongoose");

//used for session cookie
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const passportJWT = require('./config/passport-jwt-strategy');
const passportGoogle = require('./config/passport-google-auth2-strategy');

const MongoStore = require("connect-mongo")(session);
const sassMiddleware= require('node-sass-middleware');
const flash= require('connect-flash');
const customMware= require('./config/middleware');

// setup the chat server to be used with socket.io
const chatServer = require('http').Server(app);
const chatSockets = require('./config/chat_sockets').chatSockets(chatServer);
chatServer.listen(5000);
console.log('chat server is listening on port 5000');

app.use(sassMiddleware({
   src: './assets/scss',
   dest: './assets/css',
   debug: true,
   outputStyle: 'extended',
   prefix:'/css'

}));

//reading the cookies

app.use(express.urlencoded());
app.use(cookieParser()); // calling cookie

app.use(express.static("./assets"));

// make the uploads path availabe to the browser
app.use('/uploads',express.static(__dirname + '/uploads'));
app.use(expressLayouts);

//extract style and scripts from sub pages into the layout

app.set("layout exractStyles", "true");
app.set("layout exractScript", "true");

//set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");


//mongo store is used to store the session cookie in the db
app.use(
  session({
    name: "codeial",
    //tood chnage the secret before deployment
    secret: "blahsomething",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
      {
        mongooseConnection: db,
        autoRemove: "disabled"
      },
      //if the connection is not passing
      function(err) {
        console.log(err || "connect-momgodb setup ok");
      }
    )
  })
);

app.use(passport.initialize());

//helps in mantain session
app.use(passport.session());

// this function setAuthenicatedUser automatically called middleware
app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);
//use express router
app.use("/", require("./routes"));


app.listen(port, err => {
  if (err) {
    console.log(`Error in running on server: $(err)`);
  }
  console.log(`server is running on port: $(port)`);
});
