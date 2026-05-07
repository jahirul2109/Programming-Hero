import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Toggle from './Toggle.jsx'
import Userdata from './Userdata.jsx'
import AllCountries from './countries/AllCountries.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Toggle></Toggle>
    <Userdata></Userdata> */}
    <AllCountries></AllCountries>
  </StrictMode>,
)
