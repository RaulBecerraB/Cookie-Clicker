import React from 'react'

const StoreButton = ({price,title,onButtonClick}) => {
  return (
    <button className='store-button-container' onClick={onButtonClick}>
        <div style={{fontSize:'1.4rem',fontWeight:'bold'}}>
          {title}
        </div>
        <div style={{fontSize:'1.0rem',fontWeight:'semi-bold',marginTop:'0.5rem'}}>
          {price}
        </div>
    </button>
  )
}

export default StoreButton
