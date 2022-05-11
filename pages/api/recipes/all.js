import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const allRecipe = await prisma.recipe.findMany({
        include : {
            Steps : true
        }
    })
    res.send(allRecipe)
}