import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { Home } from './Home'
import { Contactos } from './Contactos'
import { NuestrosProductos } from './NuestrosProductos'
import { Deco } from './Deco'

export const Main = () => {
  return (
    <>
<BrowserRouter>
<Routes>
<Route exact path="Home" element={<Home/>}/>
<Route exact path="Contactos" element={<Contactos/>}/>
<Route exact path="Categoria/TazasPersonalizadas" element={<NuestrosProductos/>}/>
<Route exact path="Categoria/tazasEnStock" element={<NuestrosProductos/>}/>
<Route exact path="Categoria/Deco" element={<Deco/>}/>
</Routes> 
</BrowserRouter>
</>
  )
}

