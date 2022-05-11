import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.send("Please send POST request")
      } else {
        const createRecipe = await prisma.steps.createMany({data : req.body})
      }
}