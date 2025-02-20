// Import Prisma instance from your DB config file
const { prisma } = require('../DB/db.configue.js');

const createUser = async (req, res) => {
  try {
    const { email, name, password, posts = [] } = req.body;

    // Check if the user already exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      return res.status(400).send({ message: "User already exists" });
    }

    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password,
        posts: { create: posts },
      },
      
      include: { posts: true },
    });
    // {
    //   data: {
    //     name,
    //     email,
    //     posts: {
    //       create: posts,
    //     },
    //   },
    //   include: {
    //     posts: true, // Return posts with the user
    //   },
    // }
    res.status(200).send({ data: newUser, message: "Record created" });
  } catch (error) {
    console.error("Error creating user:", error);
     res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { createUser };
