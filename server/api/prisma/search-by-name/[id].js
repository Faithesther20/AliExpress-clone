import { PrismaClient } from "@prisma/client";

const prisma =PrismaClient()

export default defineEventHandler(async (event) =>{
  const body =await readBody(event)
    
    let items = await prisma.produts.findMany({
       take:5,
       where:{
        title:{
            contains:event.context.params.id,
            mode:'insensitive'
        }
       } 
    })
    return items
})