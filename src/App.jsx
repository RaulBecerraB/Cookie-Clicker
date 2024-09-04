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
  const [cookieClicks,setCookieClicks] = useState(0)

  const increment = () => setCookieClicks(cookieClicks +1)

  return(
    <>
    <div>
      <div className='navbar-container '>
         <h2>Cookie Clicker Game!</h2>
      </div>
      <div className='white-board'>
          <Container title={'STORE'}></Container>
          <CookieContainer counter = {cookieClicks} onCookieClick={increment}/>
          <Container title={'UPGRADES'}></Container>
      </div>
    </div>
    </>
  ) 
}

const CookieContainer = ({counter,onCookieClick}) =>
{
  return(
    <div>
      <div className='text-container'>
          <h3>{counter}</h3>
          <h3>Click Counts</h3>
      </div>
      <div className='cookie-container'>
        <Cookie onCookieClick = {onCookieClick}/>
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
