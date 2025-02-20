
const {Router} = require("express")
const { createUser } = require("../controller/usercontrol")
const { prisma } = require("../DB/db.configue")


const userRouter = Router()


userRouter.post("/",createUser)
userRouter.get("/",async (req, res)=>{
    const user = await prisma.user.findMany({include: { posts: false },
    });
  
    res.json({data:user})
})
module.exports={userRouter}