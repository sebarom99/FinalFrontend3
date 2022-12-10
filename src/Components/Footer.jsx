import React, { useContext } from 'react'
import { GlobalStates } from './utils/Context'
const Footer = () => {

  const { tema } = useContext(GlobalStates)

  return (
      <footer style={{background:tema.backgroundNav, color:tema.color}}>
          <div>
              <>Desarrollado por</>
              <img src="/src/img/DH.png" alt='DH-logo' style={{filter:tema.inverted}}/>
          </div>
          <div>
              <i ><img src="/src/img/ico-facebook.png" alt="Facebook" className='pequeña'/></i>
              <i ><img src="/src/img/ico-instagram.png" alt="Instagram" className='pequeña'/></i>
              <i ><img src="/src/img/ico-tiktok.png" alt="Tik Toc" className='pequeña'/></i>
              <i ><img src="/src/img/ico-whatsapp.png" alt="Whatsapp" className='pequeña'/></i>
          </div>
      </footer>
  )
}

export default Footer