const express = require('express')
const routes = require('./routes')
const app = express()
const passport = require('passport')
const session = require('express-session')
require('../src/config/auth')(passport)
require('dotenv').config()
// https://github.com/whaticket/whaticketvip    

app.use(session({
    secret:"PassportLogin",
   resave: true,
   saveUninitialized: true  
    
   }))


    // MIddleware
app.use((req,res,next)=>{
	res.locals.Usuario = req.Usuario || null
	next()

})
   
   app.use(passport.initialize())
   app.use(passport.session())

app.use(express.json())
app.use(routes)
const server = app.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})

