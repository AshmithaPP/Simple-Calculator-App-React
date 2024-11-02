import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SimpleCalculator from './SimpleCalculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleCalculator />
  </StrictMode>,
)
