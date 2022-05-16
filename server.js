const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000



//Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

// Set views
app.set("views",path.resolve(__dirname,"src", "views"))
app.set("view engine","ejs")



app.get("/",(req,res)=>{
   res.render("index")

})





app.listen(3000,()=>{
    console.log(`The server is running on port: http://localhost:${port}`)

})