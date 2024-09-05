import React from 'react'

const StoreButton = ({price,title,onButtonClick}) => {
  return (
    <button className='store-button-container' onClick={onButtonClick}>
        <div>{title}</div>
    </button>
  )
}

export default StoreButton
