require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const blogRoutes = require('./routes/blog')



//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
// app.get('/', (req, res) => {
//     res.json({msg: 'Welcome to the application'})
// })
app.use('https://mern-stack-steel.vercel.app/api/workouts', workoutRoutes)
app.use('https://mern-stack-steel.vercel.app/api/blog', blogRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    
//listen for request
app.listen(process.env.PORT, ()=>{
   // console.log('listening on port 4000v', process.env.PORT)
    console.log('listening on port 4000')
})
})
.catch((error)=>{
    console.log(error)
})
