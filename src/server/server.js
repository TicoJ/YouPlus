const express = require('express')
const app = express()

app.get("/api",(req,res) => {
    // sending an array of json users
    res.json({"users": ["user1", "user2","user3"]})
})
//server is running on port 5000, client is running on port 3000 (which is the default for react)
app.listen(5000,()=> {console.log("Server started on port 5000")})