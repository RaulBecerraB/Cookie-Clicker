import React from 'react'
import { useState } from 'react'

const StoreButton = ({price,title,points,onButtonClick}) => {

// NOTE: Should i consider always doing animations via JS or CSS
// Program the logic of the button blocking by  the price and the points
const [isClicked, setIsClicked] = useState(false);
const [buttonDisabled,setButtonDisabled] = useState(false);

// TODO: refactor this

const handleClick = () =>
{
  if(canAffordPurchase())
  {
    processPurchase();
  }
}

const canAffordPurchase = () => points >= price ? true : false

const processPurchase = () =>
{
  // This uses the button once and then disables it
  triggerButtonAnimation();
  buttonCallback();
  setButtonDisabled(true);
}

const disableButton = () => setButtonDisabled(true);

const triggerButtonAnimation = () =>
{
  enlargeButtonSize();
  setTimeout(() => resetButtonSize(false), 250);
}

const enlargeButtonSize = () => setIsClicked(true);

const resetButtonSize = () => setIsClicked(false);

const buttonCallback = () => onButtonClick();

return (
  <button className={isClicked ? 'clicked-store-button-container' : 'store-button-container'} 
  onClick={handleClick} disabled = {buttonDisabled}>
    <div style={{fontSize:'1.4rem',fontWeight:'bold'}}>
      {title}
    </div>
    <div style={{fontSize:'1.0rem',fontWeight:'semi-bold',marginTop:'0.5rem'}}>
      {price}
      <img src="./src/assets/cookie.svg" alt="cookie" width='15' height='15' style={{marginLeft:'0.5rem',marginBottom:'-0.1rem'}}/>
    </div>
  </button>
)
}

export default StoreButton
