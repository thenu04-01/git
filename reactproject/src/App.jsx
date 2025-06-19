import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './Welcome'
//import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome name='Thenu'/>
      <Welcome country='India'/>
      <h1>How are you</h1>
    </>
  )
}

export default App
