import { useEffect, useState } from "react";

import Navbar from "../../components/navbar";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getServerSideProps(context) {
    const {id} = context.query
    const recipes = await prisma.recipe.findUnique({
      where : {
        id : parseInt(id)
      },
      include: {
          Steps : true
      }
    })
    const steps = await prisma.steps.findMany({
        where : {
            recipe_id : parseInt(id)
        }
    })
    return {
      props: {
        recipes : recipes,
        recipesteps : steps
      }, // will be passed to the page component as props
    }
}

export default function RecipeId({recipes, recipesteps}){


        return <div>
            <Navbar />
            <div className="container mx-auto pt-3">
                <div className="flex justify-between">
                    <div className="inline-block">
                        <div className="flex"><svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                            <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                            <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
                        </svg> {recipes.minutes} minutes</div>
                    </div>
                    <h1 className="inline-block text-2xl text-orange-600">{recipes.title}</h1>
                    <div className="inline-block mt-4 mr-4 bg-green-400 text-white rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
                        <span>{recipes.type}</span>
                    </div>
                </div>
                <ul className="mt-8 list-decimal">
                    {recipesteps.map(step => (
                        <li>{step.content}</li>
                    ))}
                </ul>
            </div>
        </div>
}