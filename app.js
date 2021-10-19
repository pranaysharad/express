const express = require('express');
const app = express();

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

// import weatherApp
const weatherApp = require('./weatherproject/weather');

//viewengihne
app.set('view engine','ejs');


//middleware

app.use('/', weatherApp);


const PORT = process.env.PORT ||  4000;
  
app.listen(PORT,() => console.log(`server starting at port ${PORT}`));
//app.listen(4000, 'localhost');