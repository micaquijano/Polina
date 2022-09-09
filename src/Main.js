import React from 'react'
import { Routes,  BrowserRouter, Route, } from 'react-router-dom';
import { Contactos } from './Contactos';

export const Main = () => {
  return (
<>
<BrowserRouter>
<Routes>
<Route exact path="/Contactos" element={<Contactos/>}/>
  </Routes> 
  </BrowserRouter>
</>
  )
}
 