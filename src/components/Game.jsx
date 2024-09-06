import { useState } from "react";

import { CookieContainer } from './CookieContainer'
import { Container } from './Container'
import StoreButton from "./StoreButton";


export const Game = () =>
    {
      const [cookieClicks,setCookieClicks] = useState(0)
      const [multiplier,setMultiplier] = useState(1)
      const [temporalPowerUp,setTemporalPowerUp] = useState(0)

      const incrementClickCounter = () => setCookieClicks(cookieClicks + multiplier + temporalPowerUp)

      const incrementMultiplier = () => setMultiplier(multiplier + 1)
    
      return(
        <>
        <div>
          <div className='navbar-container '>
             <h2>Cookie Clicker Game!</h2>
          </div>
          <div className='white-board'>
              <Container title={'STORE'} >
                <StoreButton title={'Click Multiplier'} price={'5'} counter={cookieClicks} onButtonClick={incrementMultiplier}/>
              </Container>
              <CookieContainer counter = {cookieClicks} onCookieClick={incrementClickCounter}/>
              <Container title={'UPGRADES'}>
                
              </Container>
          </div>
        </div>
        </>
      ) 
    }