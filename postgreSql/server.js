require('dotenv').config();
let express =require("express");
const { userRouter } = require('./routes/userroutes');
const { postRouter } = require('./routes/postrouts');

const app = express()

app.use(express.json())
app.get("/",(req, res)=>{
    res.send({message:"Hello world"})
})
app.use("/create-user" , userRouter)
app.use("/post" ,postRouter)
app.listen(4000 ,()=>{
console.log("server listening")
})