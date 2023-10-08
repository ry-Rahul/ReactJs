import { useState } from 'react'
import './App.css'
import Navigation from './components/Nagivation'
import Hero from './components/Hero'



function App() {
  const [count, setCount] = useState(0)

  return (
 
      <>
          <Navigation />
          <Hero />
      </>
  )
}

export default App
