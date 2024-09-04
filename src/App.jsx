import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Cookie } from './components/Cookie'



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
         <h2>Cookie Clicker Game!</h2>
      </div>
      <div className='white-board'>
          <Container title={'STORE'}></Container>
          <CookieContainer />
          <Container title={'UPGRADES'}></Container>
      </div>
    </div>
    </>
  ) 
}

const CookieContainer = () =>
{
  return(
    <div>
      <div className='text-container'>
          <h3>Click Counts</h3>
      </div>
      <div className='cookie-container'>
      <Cookie />
      </div>
    </div>
  )
}

const Container = ({title}) =>
{
  return (
    <div>
      <div className='text-container'>
          <h3>{title}</h3>
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
