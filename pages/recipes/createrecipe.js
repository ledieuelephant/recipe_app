import Navbar from "../../components/navbar"
import axios from "axios";
import { useState } from "react"

export default function createRecipe(){
    const [recipe, setRecipe] = useState({
        title: "",
        type: "",
        minutes: "",
        ingredients_number: "",
        people: ""
    })

    async function handleChange(e){
        const key = e.target.id;
        const value = e.target.value;
        await setRecipe(recipe => ({
            ...recipe,
            [key]: value,
        }))
        await console.log(recipe)
    }

    function sendRecipe(){
        axios.post("/api/recipes/createrecipe", recipe)
    }

    return <div>
        <Navbar />
        <div className="container mx-auto">
                <div className="pt-4">
                    <label for="title">Title : </label>
                    <input onChange={e => handleChange(e)} id="title" className="border border-black" type={"text"} /> <br />
                </div>
                <div className="pt-4">
                    <label for="type">Type : </label>
                    <select id="type" onChange={e => handleChange(e)}>
                        <option value="entree">Entree</option>
                        <option value="dishes">Dishes</option>
                        <option value="dessert">Dessert</option>
                        <option value="sauce">Sauce</option>
                    </select>
                </div>
                <div className="pt-4">
                    <label for="minutes">Minutes : </label>
                    <input onChange={e => handleChange(e)} className="border border-black" id="minutes" type={"number"} />
                </div>
                <div className="pt-4">
                    <label for="ingredients_number">Ingredients : </label>
                    <input onChange={e => handleChange(e)} className="border border-black" id="ingredients_number" type={"number"} />
                </div>
                <div className="pt-4">
                    <label for="people">People : </label>
                    <input onChange={e => handleChange(e)}  className="border border-black" id="people" type={"number"} />
                </div>
                <input type={"submit"} value="Send" onClick={e => sendRecipe()} />
        </div>
    </div>
}