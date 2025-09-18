import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import logo from '../imagenes/logo.png'

const NavBar = () => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Logo Asaparri" />
      </Link>
    </div>
    <ul className="nav-links">
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/productos">Productos</Link></li>
      <li><Link to="/como-comprar">Cómo Comprar</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>
    </ul>
    <CartWidget />
  </nav>
)

export default NavBar

