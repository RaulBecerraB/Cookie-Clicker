export const Container = ({title, children, icon}) =>
    {
      return (
        <div>
          <div className='text-container'>
              <h3>{title}</h3>
              <img  src={icon} alt="icon" width={25} height={25}/>
          </div>

          <div className='display-container'>
            {children}
          </div>
        </div>
      )
    }