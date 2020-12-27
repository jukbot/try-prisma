import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  // Use the fluent relations API to retrieve the Post records of a User by traversing the relations
  const posts = await prisma.profile
    .findUnique({
      where: { id: 1 },
    })
    .user()
    .posts()

  console.log(posts)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
