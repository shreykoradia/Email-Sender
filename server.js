const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
require('dotenv').config
// const { parseConnectionUrl } = require('nodemailer/lib/shared');



// setting up the view engine for rendering on the screen 
app.set('view engine', 'ejs');

// setting up the body parser
app.use(express.urlencoded({extended: true}))
//  setting the parser
app.use(express.json());

// var 
const mail = process.env.mail;
const password = process.env.password;


// setting the routes 

app.get('/' , (req , res)=>{
   res.render('index.ejs')
})

app.post('/send' , (req , res)=>{

 const output = ` <p>You have a New Mail via Email-Sender </p>
                    <h3>Mail Details : </h3>
                    <ul>E-Mail :${req.body.email}</ul> 
                    <h3>Message : </h3>
                    <p>${req.body.message}</p>`;

        
                    // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: mail ,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: mail , // generated ethereal user
        pass: password // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: mail , // sender address
      to: `${req.body.email}` , // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello Friend ', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      
  });

})


// setting up the server code 

app.listen(process.env.PORT || 3001)
