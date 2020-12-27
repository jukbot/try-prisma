import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Filter all Post records that contain "Hello"
  const filteredPosts = await prisma.post.findMany({
    where: {
      OR: [{ title: { contains: 'Hello' } }, { content: { contains: 'Hello' } }],
    },
  })

  console.log(filteredPosts)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })