import { useState } from "react";

import { CookieContainer } from './CookieContainer'
import { Container } from './Container'
import StoreButton from "./StoreButton";


export const Game = () =>
    {
      const [cookieClicks,setCookieClicks] = useState(0)
      const [multiplier,setMultiplier] = useState(1)
      const [temporalPowerUp,setTemporalPowerUp] = useState(0)
      const [AutomaticClicksEnabled,setAutomaticClicksEnabled] = useState(false)
      
      const incrementClickCounter = () => setCookieClicks(cookieClicks + multiplier + temporalPowerUp)

      const incrementMultiplier = () => setMultiplier(multiplier + 1)

      const isAutomaticClicksEnabled = () => AutomaticClicksEnabled === true ? true:false

      const automaticClicks =  () => setTimeout(() => setCookieClicks(cookieClicks + 1), 1000);

      

      if (isAutomaticClicksEnabled())
        {
          automaticClicks();
        }

      const enableAutomaticClicks = () => setAutomaticClicksEnabled(true)

      return(
        <>
        <div>
          <div className='navbar-container '>
             <h2>Cookie Clicker Game!</h2>
          </div>
          <div className='white-board'>
              <Container title={'STORE'} >
                <StoreButton title={'Click Multiplier'} price={'5'} points={cookieClicks} onButtonClick={incrementMultiplier}/>
                <StoreButton title={'Automatic Clicks'} price={'8'} points={cookieClicks} onButtonClick={enableAutomaticClicks}/>
              </Container>
              <CookieContainer points = {cookieClicks} onCookieClick={incrementClickCounter}/>
              <Container title={'UPGRADES'}>
              </Container>
          </div>
        </div>
        </>
      ) 
    }