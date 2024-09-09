import { useState } from "react";

export const Cookie = ({onCookieClick}) =>
{
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => 
    {
      triggerCookieAnimation();
      buttonCallback(e);
    };

    const buttonCallback = (e) => onCookieClick(e);

    const triggerCookieAnimation = () => 
    {
      enlargeCookieSize();
      setTimeout(() => resetCookieSize(false), 100); 
    };

    const enlargeCookieSize = () => setIsClicked(true);

    const resetCookieSize = () => setIsClicked(false);
  
    return (
      <div onClick={handleClick} className={isClicked ? 'cookie-clicked' : ''}>
        <img src="./src/assets/cookie.svg" alt="cookie" width='150' height='150' />
      </div>
    )
}