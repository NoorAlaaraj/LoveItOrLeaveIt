const express = require('express')
const app = express ()
const PORT = 3000

// MIDDLEARE 
app.set('view engine', 'ejs')

// ROUTES 
app.listen(PORT, ()=> {
    console.log('Youre running love it or leave it app')
})