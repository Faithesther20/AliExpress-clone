import { PrismaClient } from "@prisma/client";

const prisma =PrismaClient()

export default defineEventHandler(async (event) =>{
  const body =await readBody(event)
  const order = await prisma.orders.create({
    data:
    {
        userId: body.userId,
        stripeId:body.stripeId,
        name :body.name,
        address:body.address,
        zipCode:body.zipCode,
        city:body.city,
        country:body.country,
    }
  })

  body.product.forEach(async prod =>{
    await prisma.orderItem.create({
        data:{
            orderId:order.id,
            productId: Number(prod.id)
        }
    })
  })

  return order
})