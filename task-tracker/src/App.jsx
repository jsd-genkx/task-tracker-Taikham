import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App () {
  const [tasks, setTasks] = useState
  <{id: number, text: string}[]>([]);
}

function addTask(task: { id: number, text: string }) {
  setTasks((prevTasks) => [...prevTasks, task]);
}

return (
  <div>
    <h1>Task Tracker</h1>
    {/* เพิ่มฟอร์มและการแสดงรายการ tasks ในขั้นตอนต่อไป */}
  </div>
);
