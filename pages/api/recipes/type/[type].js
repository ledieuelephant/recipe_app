import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const {type} = req.query;
    const allRecipe = await prisma.recipe.findMany({
        where : {
            type : type
        },
        include : {
            Steps : true
        }
    })
    res.send(allRecipe)
}