const { prisma } = require("../DB/db.configue");

async function CreatPosts(req, res) {
  const { posts, id } = req.body;
  try {
    const result = await prisma.Posts.createMany({
        data: posts,
      });
      res.json({data:result });

  } catch (error) {}
}
async function GetPosts(req, res) {
    const { id } = req.body;
    try {
      const result = await prisma.Posts.findMany({
          where:{
            userId:id
          }
        });
        res.json({data:result });
  
    } catch (error) {}
  }

module.exports = {CreatPosts , GetPosts}