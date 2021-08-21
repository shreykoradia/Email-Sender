const express = require('express');
const app = express();
var bodyParser = require('body-parser');
// const { parseConnectionUrl } = require('nodemailer/lib/shared');


// setting up the view engine for rendering on the screen 
app.set('view engine', 'ejs');

// setting up the body parser
app.use(express.urlencoded({extended: true}))
//  setting the parser
app.use(express.json());

// setting the routes 

app.get('/' , (req , res)=>{
   res.render('index.ejs')
})

app.post('/send' , (req , res)=>{

 const output = ` <p>You have a New Mail via Email-Sender </p>
                    <h3>Mail Details : </h3>
                    <ul>E-Mail :${req.body.mail}</ul> 
                    <h3>Message : </h3>
                    <p>${req.body.message}</p>`;

})


// setting up the server code 

app.listen(process.env.PORT || 3001)
