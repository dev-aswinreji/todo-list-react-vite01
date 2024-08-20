export function TodoLayout({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }
  return (
    <li className="todo-item">
        <h1>{task.text}</h1>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </li>
  );
}
