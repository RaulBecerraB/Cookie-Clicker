import { useState } from "react";
import { useEffect } from "react";

import { CookieContainer } from './CookieContainer'
import { Container } from './Container'
import StoreButton from "./StoreButton";
import UpgradeButton from "./UpgradeButton";


export const Game = () =>
    {
      //Puntuacion
      const [cookieClicks,setCookieClicks] = useState(0)
      //Power Ups
      const [clickMultiplier,setMultiplier] = useState(1)
      const [clickMultPrice,setClickMultPrice] = useState(5)

      const [automaticMultiplier,setAutomaticMultiplier] = useState(0)
      const [autoClickPrice, setAutoClickPrice] = useState(8)

      const [temporalPowerUp,setTemporalPowerUp] = useState(0)
      //Click handling hooks
      const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
      const [clickEffects, setClickEffects] = useState([]);

      const [upgrades, setUpgrades] = useState([]);  // Estado para los botones de UPGRADES

      const getRandomOffset = (min, max) => Math.random() * (max - min) + min;

      const incrementClickCounter = (e) => {
        setCookieClicks(cookieClicks + clickMultiplier + temporalPowerUp)
        handleClickAnimation(e)
      }

      const handleClickAnimation = (e) =>
      {
        const randomOffsets =
        {
          x: getRandomOffset(-20,20),
          y: getRandomOffset(-20,20)  
        }

        const newClickEffect = newEffect(e,randomOffsets)

        setClickEffects([...clickEffects, newClickEffect]);

        deletePreviousEffectsAfterSeconds(2,newClickEffect) 
      }

      const deletePreviousEffectsAfterSeconds = (seconds,newClickEffect) =>
      {
        // Elimina el número después de 2 segundos
        setTimeout(() => {
          setClickEffects((prev) => prev.filter(effect => effect.id !== newClickEffect.id));
        }, seconds * 1000);
      }

      const newEffect = (e,randomOffsets) =>
      {
        const clickEffect =
        {
          id: Date.now(),  
          x: e.clientX + randomOffsets.x,    
          y: e.clientY + randomOffsets.y,    
          multiplier: clickMultiplier,
        }

        return clickEffect
      }

      const upgradeClickMultiplier = () =>
      {
        incrementMultiplier()
        setClickMultPrice(clickMultPrice+10)
        setCookieClicks(cookieClicks - clickMultPrice)
      }

      const upgradeAutomaticClicks = () =>
      {
        incrementAutomaticMultiplier()
        setAutoClickPrice(autoClickPrice+20)
        setCookieClicks(cookieClicks - autoClickPrice)
      }
    
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

      const handleClick = (e) => {
        const { clientX, clientY } = e;
        setClickPosition({ x: clientX, y: clientY });
      };

      // useEffect para agregar y limpiar el event listener de click
      useEffect(() => 
      {
        window.addEventListener("click", handleClick);
        // Limpia el event listener cuando se desmonta el componente
        return () => {
         window.removeEventListener("click", handleClick);
        };
      }, []);

      

      return(
        <>
        <div>
          <div className='navbar-container '>
             <h2>Cookie Clicker Game!</h2>
          </div>
          <div className='white-board'>
              <Container title={'UPGRADES'} >
                <UpgradeButton title={'Click Multiplier'} price={clickMultPrice} points={cookieClicks} onButtonClick={upgradeClickMultiplier} />
                <UpgradeButton title={'Automatic Clicks'} price={autoClickPrice} points={cookieClicks} onButtonClick={upgradeAutomaticClicks}/>
              </Container>
              <CookieContainer points = {cookieClicks} onCookieClick={incrementClickCounter}/>
              <Container title={'STORE'}>
                {/* HAY QUE REPLANTEAR LOS BOTONES DE TIENDA
                <StoreButton title={'Click Multiplier'} price={clickMultPrice} points={cookieClicks} onButtonClick={upgradeClickMultiplier}/>
                <StoreButton title={'Automatic Clicks'} price={autoClickPrice} points={cookieClicks} onButtonClick={upgradeAutomaticClicks}/>*/}
              </Container>
          </div>

           {/* Renderiza cada efecto de clic en su posición correspondiente */}
        {clickEffects.map((effect) => (
          <div
            key={effect.id}
            className="multiplier"
            style={{ left: effect.x, top: effect.y }}
          >
            +{effect.multiplier}
          </div>
        ))}
        </div>
        </>
      ) 
    }