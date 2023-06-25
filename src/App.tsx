import { useState } from 'react'
import { Thumbnails } from './pages/thumbnail'
import Navbar from './components/navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  return (
    <div className="App h-full bg-gradient-to-r from-blue-200 to-pink-100">
      <Navbar/>
      <Thumbnails/>
    </div>
  )
}

export default App
