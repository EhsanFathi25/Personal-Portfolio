
import { useEffect, useState } from 'react';
import './App.css';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Navbar } from './components/Navbar';
import emailjs from "@emailjs/browser";
import { Footer } from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() =>{
    setIsLoading(true)
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])
  

  return (
    <div className={`app ${isLoading ? "loaded" : ""}`}>
    <Navbar />
    
    <Hero />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
