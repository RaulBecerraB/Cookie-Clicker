export const Container = ({title, children}) =>
    {
      return (
        <div>
          <div className='text-container'>
              <h3>{title}</h3>
              <img  src="./src/assets/storeSVG.svg" alt="logo tienda" width={25} height={25}/>
          </div>
    
          <div className='display-container'>
            {children}
          </div>
        </div>
      )
    }