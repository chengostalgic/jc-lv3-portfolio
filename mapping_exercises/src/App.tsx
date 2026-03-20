import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {RenderArray} from "./components/RenderArray"
import {RenderCards} from "./components/RenderCards"
import {LinksList} from "./components/LinksList"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <RenderArray></RenderArray> */}
      <div className="flex items-center justify-center">
        <RenderCards></RenderCards>
      </div>
      <LinksList></LinksList>
      
    </div>
  )
}

export default App
