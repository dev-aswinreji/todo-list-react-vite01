import { useEffect, useState } from "react"


function CreateTodo(){
    const [tasks,setTasks] = useState([])

    const [text,setText] = useState('')
    
    useEffect(()=>{
        setTasks(text)
    },[text])

    function SetText(textMsg){
        setText(textMsg)
        console.log(textMsg,'task is showing');
    }



    return (
        <>
        <div>
            <input type="text" name="" id="" onChange={(e)=>SetText(e.target.value)}/>
            <button> ADD</button>
            <br />
            {tasks}
        </div>
        </>
    )
}


export default CreateTodo