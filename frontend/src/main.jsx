import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// ✅ Import your global stylesheet
import './style.css'

import App from './App.jsx'

// ✅ Mount React App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)