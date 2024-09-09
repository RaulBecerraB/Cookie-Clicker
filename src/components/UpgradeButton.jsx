import React, { useEffect } from 'react'
import { useState } from 'react'

const UpgradeButton = ({title,price,points,onButtonClick}) => {
    const [isClicked, setIsClicked] = useState(false)
    const [buttonDisabled,setButtonDisabled] = useState(true);

    const canAffordPurchase = () => points >= price ? true : false
    
    const enableButton = () => setButtonDisabled(false)
    
    const disableButton = () => setButtonDisabled(true)

    const handleClick = () =>
    {
      if(canAffordPurchase())
      {
        processPurchase()
        console.log(buttonDisabled)
      }
    }
    
    const processPurchase = () =>
    {
      // This uses the button once and then disables it
      triggerButtonAnimation();
      buttonCallback();
    }
  
    const triggerButtonAnimation = () =>
    {
      enlargeButtonSize();
      setTimeout(() => resetButtonSize(false), 250);
    }
    
    const enlargeButtonSize = () => setIsClicked(true);
    
    const resetButtonSize = () => setIsClicked(false);
    
    const buttonCallback = () => onButtonClick();

    useEffect(() => {
      if (canAffordPurchase())
        {
          enableButton()
        }
      else
        {
          disableButton()
        }
      }
      ,[canAffordPurchase,enableButton])
    
    return (
      <button className={`${isClicked ? 'clicked-store-button-container' : 'store-button-container'} 
       ${buttonDisabled ? 'disabled-store-button-container':'store-button-container'}`} onClick={handleClick}
       disabled={buttonDisabled}>
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

export default UpgradeButton
