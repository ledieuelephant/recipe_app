import Navbar from '../../components/navbar'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getServerSideProps(context) {
    const recipes = await prisma.recipe.findMany();
    return {
      props: {
          recipes : recipes
      }, // will be passed to the page component as props
    }
}

export default function Home({recipes}) {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto pt-3'>
        <div class="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {recipes.map(recipe => (
              <div class="bg-white rounded-md overflow-hidden relative shadow-md">
              <div class="p-4">
                  <h2 class="text-2xl text-orange-600">{recipe.title}</h2>
                  <div class="flex justify-between mt-4 mb-4 text-gray-500">
                  <div class="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span class="ml-1 lg:text-xl">{recipe.minutes}m</span>
                  </div>
                  <div class="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                      </svg>
                      <span class="ml-1 lg:text-xl">{recipe.ingredients_number}</span>
                  </div>
                  <div class="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span class="ml-1 lg:text-xl">{recipe.people}</span>
                  </div>
                  </div>
                  <a href={"/recipes/"+recipe.id}><button class="text-white bg-green-400 p-4 rounded-md w-full uppercase">Watch the recipe</button></a>
              </div>
              <div class="absolute top-0 right-0 mt-4 mr-4 bg-green-400 text-white rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
                  <span>{recipe.type}</span>
              </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}