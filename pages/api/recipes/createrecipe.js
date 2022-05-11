import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.send("Please send POST request")
      } else {
        var mydata = req.body
        console.log(mydata)
        const createRecipe = await prisma.recipe.create({data : {
          title : mydata.title,
          type : mydata.type,
          minutes : mydata.minutes,
          ingredients_number : mydata.ingredients_number,
          people : mydata.people
        }})
      }
}