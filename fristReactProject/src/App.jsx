import { useState } from 'react'
import Input from './input'

function App() {

  return (
    <>
      <h1 className='text-2xl bg-amber-400' >Hello Word</h1>
      <Input 
      name = "jahirul"
      counter = {[12, 23, 12]}
      />
      <Player name = "jahirul"  desi = "SE" active = {true} ></Player>
      <Player name = "Jahid"  desi = "Incharge" active = {false} ></Player>
    </>
  )
}

function Player ({name , desi, active}) {
 if (active === true) return (
    <div>
    <h1>Name : {name} <br /> Designation : {desi}</h1>
    </div>
  )
  else {
    return <h1>Id is Not active</h1>
  }
}

export default App
