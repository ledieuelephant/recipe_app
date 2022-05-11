import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const {id} = req.query;
    const oneRecipe = await prisma.recipe.findUnique({
        where : {
            id : parseInt(id)
        },
        include : {
            Steps : true
        }
    })
    res.send(oneRecipe)
}