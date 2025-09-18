import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './componentes/NavBar'
import Contenedor from './componentes/Contenedor'
import Productos from './componentes/Productos'
import ComoComprar from './componentes/ComoComprar'
import Contacto from './componentes/Contacto'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Contenedor mensaje="¡Bienvenido a Asaparri, las mejores parrillas!" />}
        />
        <Route path="/productos" element={<Productos />} />
        <Route path="/como-comprar" element={<ComoComprar />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  )
}

export default App