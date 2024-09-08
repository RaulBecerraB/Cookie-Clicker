import { useState } from "react";
import { useEffect } from "react";

import { CookieContainer } from './CookieContainer'
import { Container } from './Container'
import StoreButton from "./StoreButton";


export const Game = () =>
    {
      const [cookieClicks,setCookieClicks] = useState(0)
      const [multiplier,setMultiplier] = useState(1)
      const [temporalPowerUp,setTemporalPowerUp] = useState(0)
      const [AutomaticClicksEnabled,setAutomaticClicksEnabled] = useState(false)
      
      const incrementClickCounter = () => {
        setCookieClicks(cookieClicks + multiplier + temporalPowerUp);
      };
    
      const incrementMultiplier = () => {
        setMultiplier(multiplier + 1);
      };
    
      const enableAutomaticClicks = () => {
        setAutomaticClicksEnabled(true);
      };

      const isAutomaticClicksEnabled = () => AutomaticClicksEnabled ? true : false;

      // useEffect para controlar los clicks automáticos
      useEffect(() => {
        let interval;
        if (isAutomaticClicksEnabled()) {
          interval = setInterval(() => {
            setCookieClicks(cookieClicks + 1);
          }, 1000);
          console.log(cookieClicks);
        }
    
        // Limpia el intervalo cuando se desactiva el automático o cuando se desmonta el componente
        return () => clearInterval(interval);
      }, [isAutomaticClicksEnabled]); // Escucha cambios en automaticClicksEnabled

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