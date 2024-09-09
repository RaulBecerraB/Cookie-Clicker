import { useState } from "react";
import { useEffect } from "react";

import { CookieContainer } from './CookieContainer'
import { Container } from './Container'
import StoreButton from "./StoreButton";


export const Game = () =>
    {
      const [cookieClicks,setCookieClicks] = useState(0)

      const [clickMultiplier,setMultiplier] = useState(1)
      const [automaticMultiplier,setAutomaticMultiplier] = useState(0)
      const [temporalPowerUp,setTemporalPowerUp] = useState(0)
      
      const incrementClickCounter = () => {
        setCookieClicks(cookieClicks + clickMultiplier + temporalPowerUp)
      };
    
      const incrementMultiplier = () => setMultiplier(clickMultiplier + 1)
      const incrementAutomaticMultiplier = () => setAutomaticMultiplier(automaticMultiplier + 1)
    
      const startAutomaticClicks = () => setInterval(() => {setCookieClicks(prevClicks => prevClicks + automaticMultiplier);}, 1000)
      const isAutomaticClicksEnabled = () => automaticMultiplier > 0;

      // useEffect creates just ONE interval instead of multiple intervals per render.
      useEffect(() => {
        let interval;

        if (isAutomaticClicksEnabled())
          interval = startAutomaticClicks();
      
        // Limpia el intervalo cuando se desactiva el automático o cuando se desmonta el componente
        return () => clearInterval(interval);
      }, [automaticMultiplier]); // Escucha cambios en automaticClicksEnabled

      return(
        <>
        <div>
          <div className='navbar-container '>
             <h2>Cookie Clicker Game!</h2>
          </div>
          <div className='white-board'>
              <Container title={'STORE'} >
                <StoreButton title={'Click Multiplier'} price={'5'} points={cookieClicks} onButtonClick={incrementMultiplier}/>
                <StoreButton title={'Automatic Clicks'} price={'8'} points={cookieClicks} onButtonClick={incrementAutomaticMultiplier}/>
              </Container>
              <CookieContainer points = {cookieClicks} onCookieClick={incrementClickCounter}/>
              <Container title={'UPGRADES'}>
              </Container>
          </div>
        </div>
        </>
      ) 
    }