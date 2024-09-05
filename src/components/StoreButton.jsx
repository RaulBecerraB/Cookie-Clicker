import React from 'react'

const StoreButton = ({price,title,onButtonClick}) => {
  return (
    <button className='text-container' onClick={onButtonClick}>
        {title}
    </button>
  )
}

export default StoreButton
