const express = require('express')
const app = express()
const session = require("express-session")

// //creating session
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     saveUninitialized: true,
//     resave:false,
//     cookie: {
//         httpOnly:true,
//         maxAge: 3600000

//     }
// }))

// app.use((req,res,next) => {
//     console.log(eq.session)
//     next()
// })


app.get("/api",(req,res) => {
    // sending an array of json users
    res.json({"users": ["user1", "user2","user3","user4"]})
})
//server is running on port 5000, client is running on port 3000 (which is the default for react)
app.listen(5000,()=> {console.log("Server started on port 5000")})