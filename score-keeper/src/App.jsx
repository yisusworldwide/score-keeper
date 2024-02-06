import { useState } from 'react'
import './App.css'
import ScoreKeeper from './ScoreKeeper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ScoreKeeper />
      </div>
      
    </>
  )
}

export default App
