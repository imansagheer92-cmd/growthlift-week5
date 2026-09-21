import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <h1>GrowthLift Task Manager</h1>
      <TaskList />
    </div>
  );
}
export default App
