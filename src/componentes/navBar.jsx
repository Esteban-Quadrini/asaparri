import React from 'react'
import CartWidget from './CartWidget'
import logo from '../imagines/logo.png'

const NavBar = () => (
  <nav className="navbar">
    <div className="logo">
      <img src={logo} alt="Logo Asaparri" />
    </div>
    <ul className="nav-links">
      <li>Inicio</li>
      <li>Productos</li>
      <li>Cómo Comprar</li>
      <li>Contacto</li>
    </ul>
    <CartWidget />
  </nav>
)

export default NavBar

