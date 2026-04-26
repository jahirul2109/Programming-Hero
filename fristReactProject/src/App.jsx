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
      <Player name = "jahirul"  desi = "SE" active = {true} id = {18} ></Player>
      <Player name = "Jahid"  desi = "Incharge" active = {false} id = {23} ></Player>
    </>
  )
}

function Player ({name , desi, active , id}) {
 if (active === true) return (
    <div>
    <h1>Name : {name} <br /> Designation : {desi}</h1>
    </div>
  )
  else {
    return <div> Staff id {id} is Not active</div>
  }
}

export default App
