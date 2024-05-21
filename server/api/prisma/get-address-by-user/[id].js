import { PrismaClient } from "@prisma/client";

const prisma =PrismaClient()

export default defineEventHandler(async (event) =>{
  let orders = await prisma.addresses.findMany({
    where:{userId:event.context.params.userId},
    
  })
  return res
})
