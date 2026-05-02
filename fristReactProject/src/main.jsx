import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewComponent from './compo.jsx'
import Counter from './conuter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter></Counter>
    <NewComponent/>
  </StrictMode>,
)
