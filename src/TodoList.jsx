import { useEffect, useState } from "react";
import './TodoList.css'
import { TodoLayout } from "./TodoLayout";

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
    const newTask = {
        id:Date.now(),
        text,
        completed:false,
    }
    setTasks([...tasks, newTask]);
    setText("");
    console.log(text, "task is showing");
  }

  function deleteTask(id) {
    setTasks(tasks.filter(item=>item.id !== id))
  }

  function toggleCompleted(id){
    setTasks(tasks.map(item=>{
        if(item.id === id){
            return {...tasks,completed: !item.completed}
        }else {
            return item
        }
    }))
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
            <TodoLayout
                key={item.id}
                task={item}
                deleteTask={deleteTask}
                toggleCompleted={toggleCompleted}
             />
          ))}
        </ol>
      </div>
    </>
  );
}

export default CreateTodo;
