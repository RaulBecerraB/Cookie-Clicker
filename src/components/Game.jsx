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
      const [automaticMultiplier,setAutomaticMultiplier] = useState(0)
      const [temporalPowerUp,setTemporalPowerUp] = useState(0)
      //Other hooks
      const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
      const [clickEffects, setClickEffects] = useState([]);

      const [upgrades, setUpgrades] = useState([]);  // Estado para los botones de UPGRADES

      const getRandomOffset = (min, max) => Math.random() * (max - min) + min;


      const incrementClickCounter = (e) => {
        setCookieClicks(cookieClicks + clickMultiplier + temporalPowerUp)

        // Genera un desplazamiento aleatorio para x e y
      const randomXOffset = getRandomOffset(-20, 20);  // Variación en la posición X
      const randomYOffset = getRandomOffset(-20, 20);  // Variación en la posición Y

      const newClickEffect = {
       id: Date.now(),  // Genera un ID único basado en el tiempo actual
       x: e.clientX + randomXOffset,    // Añade desplazamiento aleatorio en X
       y: e.clientY + randomYOffset,    // Añade desplazamiento aleatorio en Y
       multiplier: clickMultiplier,
       };

       setClickEffects([...clickEffects, newClickEffect]);
     
        // Elimina el número después de 2 segundos
       setTimeout(() => {
          setClickEffects((prev) => prev.filter(effect => effect.id !== newClickEffect.id));
        }, 2000);
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
             {console.log(clickPosition)}
          </div>
          <div className='white-board'>
              <Container title={'STORE'} >
                <StoreButton title={'Click Multiplier'} price={'5'} points={cookieClicks} onButtonClick={incrementMultiplier}/>
                <StoreButton title={'Automatic Clicks'} price={'8'} points={cookieClicks} onButtonClick={incrementAutomaticMultiplier}/>
              </Container>
              <CookieContainer points = {cookieClicks} onCookieClick={incrementClickCounter}/>
              <Container title={'UPGRADES'}>
                <UpgradeButton title={'Click Multiplier'} price={'20'} points={cookieClicks} onButtonClick={incrementMultiplier} />
                <UpgradeButton title={'Automatic Clciks'} price={'40'} points={cookieClicks} onButtonClick={incrementAutomaticMultiplier}/>
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