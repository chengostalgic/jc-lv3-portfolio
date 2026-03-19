import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Greet } from './components/Greet'
import { Footer } from './components/Footer'
import { Logo } from  './components/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (      
      <div>
        <Greet name="JC"></Greet>
        <Logo></Logo>
        <Footer></Footer>
      </div>
  )
}

export default App
