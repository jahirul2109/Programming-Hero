import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Current Value {count}</h1>
      <div>
        <button className='px-3 py-1 border rounded-lg border-green-500 mx-2' onClick={() => setCount(count + 1)}>Increase</button>
        <button className='px-3 py-1 border rounded-lg border-green-500 mx-2' onClick={() => {
          if (count == 0) {
            setCount(count)
          } else {setCount(count -1)}
        }}>Decrease</button>
        <button className='px-3 py-1 border rounded-lg border-green-500 mx-2' onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  )
}

export default App
