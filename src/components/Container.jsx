export const Container = ({title, children}) =>
    {
      return (
        <div>
          <div className='text-container'>
              <h3>{title}</h3>
          </div>
    
          <div className='display-container'>
            {children}
          </div>
        </div>
      )
    }