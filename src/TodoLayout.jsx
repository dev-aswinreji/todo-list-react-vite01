export function TodoLayout({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompleted(task.id)}
      />
      <p className={task.completed ? 'completed' : ''}>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </li>
  );
}
