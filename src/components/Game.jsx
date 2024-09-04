import { useState } from "react";

import { CookieContainer } from './CookieContainer'
import { Container } from './Container'


export const Game = () =>
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