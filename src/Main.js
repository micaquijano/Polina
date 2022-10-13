import React from 'react'
import { Routes,  BrowserRouter, Route, } from 'react-router-dom';
import { Contactos } from './Contactos';
import NuestrosProductos from './NuestrosProductos';

export const Main = () => {
  return (
<>
<BrowserRouter>
<Routes>
<Route exact path="/Contactos" element={<Contactos/>}/>
<Route exact path="/id:NuestrosProductos" element={<NuestrosProductos/>}/>
</Routes> 
  </BrowserRouter>
</>
  )
}
 