import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')

if(!root){
  throw new Error('Root element not found')  // error handling if root element is not found in the DOM tree.
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
