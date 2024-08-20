import { useEffect, useState } from "react";

function CreateTodo() {
  const [tasks, setTasks] = useState([]);

  const [text, setText] = useState("");

  function addTask(text) {
    setTasks([...tasks, text]);
    setText("");
    console.log(text, "task is showing");
  }

  return (
    <>
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => addTask(text)}> ADD</button>
        <br />
        <h1>
            {tasks.map(item=><p key={item}>{item}</p>)}
        </h1>
      </div>
    </>
  );
}

export default CreateTodo;
