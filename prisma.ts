import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function createPost() {
  const user = await prisma.user.create({
    data: {
        password: '1234',
        name: 'Leo'
    }
  });

  const post = await prisma.task.create({
    data: {
      text: "hello",
      title: 'title',
      user: {
        connect: {id: user.id}
      }
    }
  })
}
  
createPost()