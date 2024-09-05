import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/game.css'
import './styles/containers.css'

createRoot(document.getElementById('root')).render(<App />)
