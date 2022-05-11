import Navbar from "../../../components/navbar";
import axios from "axios";
import { useRouter } from "next/router"
import { useState } from "react";

export default function createStepsId(){
    const router = useRouter()
    const {id} = router.query
    const [steps, setSteps] = useState([])
    const [text, setText] = useState("")

    function changeText(e){
        setText(e.target.value)
    }

    function sendDataToSteps(){
        setSteps(steps => [...steps, {content : text, recipe_id : parseInt(id)}])
        console.log(steps)
        setText("")
    }

    function sendDataToApi(){
        axios.post("/api/recipes/createsteps", steps)
    }

    return <div>
        <Navbar />
        <div className="container mx-auto">
            <ol className="list-decimal">
                {steps.map(step => (
                    <li>{step.content}</li>
                ))}
            </ol>
            <input className="border border-black" type={"text"} onChange={e => changeText(e)}/>
            <input className="pl-3" type={"submit"} value="Add" onClick={e => sendDataToSteps()} /> <br />
            <input type={"submit"} onClick={e => sendDataToApi()}/>
        </div>
    </div>
}