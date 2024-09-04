import { useState } from "react";

export const Cookie = ({widht, height,onCookieClick}) =>
{
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(true);
      onCookieClick();
      setTimeout(() => setIsClicked(false), 100); // Duración de la animación
    };
  
    return (
      <div onClick={handleClick} className={isClicked ? 'cookie-clicked' : ''}>
        <img src="./src/assets/cookie.svg" alt="cookie" width='150' height='150' />
      </div>
    )
}