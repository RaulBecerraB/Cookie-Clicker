import { Cookie } from './Cookie'

export const CookieContainer = ({counter,onCookieClick}) =>
    {
      return(
        
        <div>
          <div className='text-container'>
              <h3>{counter}</h3>
              <h3>Click Counts</h3>
          </div>
          <div className='cookie-container'>
            <Cookie onCookieClick = {onCookieClick}/>
          </div>
        </div>
      )
    }