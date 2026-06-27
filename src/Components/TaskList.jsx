import React from "react";

export default function TaskList({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    const updatedTask = {
      ...tasks[index],
      completed: !tasks[index].completed,
    };
    updateTask(updatedTask, index);
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index}>
          <div className="task-info">
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>

            <small>
              {task.priority} • {task.category}
            </small>
          </div>

          <div className="task-actions">
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? "↩ Undo" : "✓ Complete"}
            </button>

            <button onClick={() => deleteTask(index)}>
              🗑 Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}