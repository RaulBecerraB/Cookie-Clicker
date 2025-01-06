import React, { useEffect } from 'react'
import { useState } from 'react'
import cookieSVG from '../assets/cookie.svg'

const UpgradeButton = ({title,price,points,onButtonClick}) => {
    const [isClicked, setIsClicked] = useState(false)
    const [buttonDisabled,setButtonDisabled] = useState(true)
    const [buttonLevel,setButtonLevel] = useState(0)

    const canAffordPurchase = () => points >= price ? true : false
    
    const enableButton = () => setButtonDisabled(false)
    
    const disableButton = () => setButtonDisabled(true)

    const handleClick = () =>
    {
      if(canAffordPurchase())
      {
        processPurchase()
      }
    }

    const levelUpButton = () =>
    {
      setButtonLevel(buttonLevel + 1)
    }
    
    const processPurchase = () =>
    {
      triggerButtonAnimation();
      levelUpButton()
      buttonCallback();
    }
  
    const triggerButtonAnimation = () =>
    {
      enlargeButtonSize()
      resetButtonSizeAfterSeconds(0.250)
    }

    const resetButtonSizeAfterSeconds = (seconds) => setTimeout(() => resetButtonSize(), seconds * 1000);
    
    const enlargeButtonSize = () => setIsClicked(true)
    
    const resetButtonSize = () => setIsClicked(false)
    
    const buttonCallback = () => onButtonClick()

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
          <img src={cookieSVG} alt="cookie" width='15' height='15' style={{marginLeft:'0.5rem',marginBottom:'-0.1rem'}}/>
          {' Lvl   ' + buttonLevel}
        </div>
      </button>
    )
}

export default UpgradeButton
