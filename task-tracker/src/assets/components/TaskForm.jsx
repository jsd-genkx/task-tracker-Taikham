import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (taskText.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: taskText
      };
      onAddTask(newTask);
      setTaskText('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;