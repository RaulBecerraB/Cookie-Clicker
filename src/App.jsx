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
      <div className='navBarContainer '>
         <h1>Cookie Clicker Game!</h1>
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
