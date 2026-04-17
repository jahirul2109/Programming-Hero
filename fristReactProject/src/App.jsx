import { useState } from 'react'
import Input from './input'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Word</h1>
      <Input 
      name = "jahirul"
      counter = {[12, 23, 12]}
      />
    </>
  )
}

export default App
