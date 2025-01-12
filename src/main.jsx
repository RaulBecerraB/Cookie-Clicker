import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/game.css'
import './styles/containers.css'
import { Game } from './components/Game.jsx'

createRoot(document.getElementById('root')).render(<Game />)
