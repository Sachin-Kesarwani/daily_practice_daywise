import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SnakeGame from './components/SnakeGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SnakeGame/>
    </>
  )
}

export default App
