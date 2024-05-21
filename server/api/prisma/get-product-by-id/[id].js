import { PrismaClient } from "@prisma/client";

const prisma =PrismaClient()

export default defineEventHandler(async (event) =>{
  let product = await prisma.products.findFirst({
    where: {id: Number(event.context.params.id)}
  })
  return product
})