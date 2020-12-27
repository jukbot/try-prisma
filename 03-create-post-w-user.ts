import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  // Create a new Post record and connect it to an existing User record
  const post = await prisma.post.create({
    data: {
      title: 'Join us for Prisma Day 2020',
      author: {
        connect: { email: 'alice@prisma.io' },
      },
    },
  })

  console.log(post)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
