const express = require('express');
const app = express();

// setting up the view engine for rendering on the screen 
app.set('view engine', 'ejs');

// setting the routes 

app.get('/' , (req , res)=>{

   res.render('index.ejs')

})



// setting up the server code 

app.listen(process.env.PORT || 3001)
