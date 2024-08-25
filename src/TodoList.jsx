import { useEffect, useState } from "react";
import './TodoList.css'
import { TodoLayout } from "./TodoLayout";

function CreateTodo() {
  const [tasks, setTasks] = useState([]);

  const [text, setText] = useState("");
  
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

let newTasks = []
 let count = 0
 for(let i = tasks.length -1; i>=0;i-- ){
    newTasks[count] = tasks[i]
    count++
 }
 console.log(tasks,'tasks is sowign');
 console.log(newTasks,'newTasks is showing');
  return (
    <div className="todo-app">
      <header>
        <h1>TODO APP</h1>
      </header>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={() => addTask(text)}>ADD</button>
      </div>
      <main>
        <ol className="order-list">
          {newTasks.map((task) => (
            <TodoLayout
              key={task.id}
              task={task}
              deleteTask={deleteTask}
            />
          ))}
        </ol>
      </main>
    </div>
  );
}

export default CreateTodo;
