import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Routes, Route, } from 'react-router-dom';
import { SobreNosotros } from './SobreNosotros';

export const Main = () => {
  return (
<>
<Routes>
<Route exact path='/SobreNosotros'element={SobreNosotros} ></Route>
  </Routes> 
 
</>
  )
}
 