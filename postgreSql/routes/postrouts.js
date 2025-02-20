
const {Router} = require("express")
const { prisma } = require("../DB/db.configue")
const { CreatPosts, GetPosts } = require("../controller/postcontroller")


const postRouter = Router()

postRouter.post("/",CreatPosts)
postRouter.get("/",GetPosts)
module.exports={postRouter}