import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Game />
    </>
  )
}

const Game = () =>
{
  return(
    <>
    <div>
      <div className='navbar-container '>
         <h1>Cookie Clicker Game!</h1>
      </div>
      <div className='white-board'>
        <div className='text-container'>
          <h2>L</h2>
        </div>
        <div style={{border:'blue',borderRadius:'20px'}}>
          <div className='upgrades-container'>
          </div>
        </div>
      </div>
    </div>
      
    </>
  ) 
}

const NavBar = () =>
{
  <>
  </>
}

export default App
