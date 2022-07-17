console.log("hello");
const expess = require("express");
const cors = require("cors");
const morgan = require('morgan')

const app = expess()

app.use(morgan('combined'))
app.use(expess.json())
app.use(cors())


app.get('/status',(req,res)=>{
    res.send({
        message:"Hello world"
    })
})

app.listen(8081)