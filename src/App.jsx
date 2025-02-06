import './App.css'
import { AppBar } from './components/Header/AppBar'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Education } from './pages/Education/Education'
import { Experience } from './pages/Experience/Experienct'
import { Projects } from './pages/Projects/Projects'
import { ContactMe } from './pages/ContactMe/ContactMe'

function App() {

  return (
    <BrowserRouter>
      <div>
        <div className=''>
          <AppBar/>
        </div>
          <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/education" element={<Education/>} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contactme" element={<ContactMe/>} />
          </Routes>
        <br />
        <br />
        <br />
        <div className="justify-self-center">
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default App
