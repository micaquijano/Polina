import React from 'react'
import { Routes,  BrowserRouter, Route, } from 'react-router-dom';
import { Contactos } from './Contactos.js';
import { NuestrosProductos } from './NuestrosProductos';
import MainContainer from "./MainContainer.js";
import { Deco } from './Deco.js';

export const Main = () => {
  return (
<>
<BrowserRouter>
<Routes>
<Route exact path="/MainContainer" element={<MainContainer/>}/>
<Route exact path="/Contactos" element={<Contactos/>}/>
<Route exact path="Categoria/TazasPersonalizadas" element={<NuestrosProductos/>}/>
<Route exact path="Categoria/tazasEnStock" element={<NuestrosProductos/>}/>
<Route exact path="Categoria/Deco" element={<Deco/>}/>
</Routes> 
</BrowserRouter>
</>
  )
}
 