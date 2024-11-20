import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppBar } from './components/Header/AppBar'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className=''>
        <AppBar/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      <br />
      <br />
      <br />
      <div className="justify-self-center">
        <Footer/>
      </div>
    </div>
    
  )
}

export default App
