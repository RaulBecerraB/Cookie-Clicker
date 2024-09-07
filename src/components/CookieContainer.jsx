import { Cookie } from './Cookie'

export const CookieContainer = ({points,onCookieClick}) =>
    {
      return(
        
        <div>
          <div className='counter-container'>
              <div style={{color:'white', fontSize:'32px',fontWeight:'bold'}}>{points}</div>
              <div style={{color:'white', fontSize:'24px',fontWeight:'bold'}}>
                Click Counts
              </div>
          </div>
          <div className='cookie-container'>
            <Cookie onCookieClick = {onCookieClick}/>
          </div>
        </div>
      )
    }