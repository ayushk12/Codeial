 const express = require('express');
 const app=express();
 const port=8000;
 const expressLayouts=require('express-ejs-layouts');

 //connection for database
 const db=require('./config/mongoose');
 app.use(express.static('./assets'))
 app.use(expressLayouts);

//extract style and scripts from sub pages into the layout

app.set('layout exractStyles', 'true');
app.set('layout exractScript', 'true');
 //use express router
 app.use('/',require('./routes'));


 //set up the view engine
 app.set('view engine','ejs');
 app.set('views', './views');

 app.listen(port, (err) => {
     if(err){
    
        console.log(`Error in running on server: $(err)`);
     }
     console.log(`server is running on port: $(port)`);
    });