import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Greet} from './components/Greet'

function App() {
  const [count, setCount] = useState(0)

  return (      
      <div>
        <Greet name="JC"></Greet>
        <Footer></Footer>
      </div>
  )
}

export default App
