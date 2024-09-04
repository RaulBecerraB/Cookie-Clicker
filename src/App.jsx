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
          <Container title={'STORE'}></Container>
          <Container title={'COUNTER'}></Container>
          <Container title={'UPGRADES'}></Container>
      </div>
    </div>
    </>
  ) 
}

const Container = ({title}) =>
{
  return (
    <div>
      <div className='text-container'>
          <h2>{title}</h2>
      </div>

      <div className='display-container'>
          
      </div>
    </div>
  )
}

const NavBar = () =>
{
  <>
  
  </>
}

export default App
