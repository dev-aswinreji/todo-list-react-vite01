import { useEffect, useState } from "react";
import './TodoList.css'

function CreateTodo() {
  const [tasks, setTasks] = useState([]);

  const [text, setText] = useState("");

    // useEffect(()=>{
    //  if(!text.length){
    //     alert('hello')
    //  }  
    // },[text])

  function addTask(text) {
    if(text.length <=0){
        return alert('Invalid input')
    }
    setTasks([...tasks, text]);
    setText("");
    console.log(text, "task is showing");
  }

  return (
    <>
      <div>
        <h1>TODO APP</h1>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => addTask(text)}> ADD</button>
        <br />
        <ol className="order-list">
          {tasks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default CreateTodo;
