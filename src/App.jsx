import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppBar } from './components/Header/AppBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AppBar/>
    </div>
  )
}

export default App
