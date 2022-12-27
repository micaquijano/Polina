import React from 'react'
import { Routes,  BrowserRouter, Route, } from 'react-router-dom';
import { Contactos } from './Contactos.js';
import { NuestrosProductos } from './NuestrosProductos';
import { Deco } from './Deco.js';
import { Home } from './Home.js';

export function Main() {
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
