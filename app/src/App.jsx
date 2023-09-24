import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Views testing
import Chat from './views/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Chat />
  )
}

export default App
