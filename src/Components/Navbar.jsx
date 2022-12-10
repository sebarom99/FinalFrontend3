import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalStates } from './utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { tema, handleTema } = useContext(GlobalStates)

  return (
      <nav className='navbar' style={{background:tema.backgroundNav, color:tema.color}}>
          <Link to={'/'}><h2>DH Odonto</h2></Link>
          <div>
              <Link to={'/'}>Home</Link>
              <Link to={'/Contacto'}>Contacto</Link>
              <Link to={'/Favs'}>Favoritos</Link>
              <button className={(tema.color === 'black')} onClick={handleTema} style={{width: "65px", height: "40px"}}>cambiar modo</button>
          </div>
      </nav>
  )
}

export default Navbar