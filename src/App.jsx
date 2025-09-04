
import { useEffect, useState } from 'react'
import './App.css'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'

import { Projects } from './components/Projects'
import { Navbar } from './components/Navbar'

function App() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() =>{
    setIsLoading(true)
  }, [])
  

  return (
    <div className={`app ${isLoading ? "loaded" : ""}`}>
    <Navbar />
    
    <Hero />
    <Projects />
    <Contact />

    <>
    <p>&copy; 2025 EhsanFathi. All rights reserved.</p>
    </>
    </div>
  )
}

export default App
