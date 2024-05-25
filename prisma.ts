import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function createPost() {
  const user = await prisma.user.findUnique({
    where: {
      email: 'john.doe@example.com'
    }
  })

  const post = await prisma.post.create({
    data: {
      author: {
        connect: {
          id: user?.id
        }
      }
    }
  })
}
  
createPost()