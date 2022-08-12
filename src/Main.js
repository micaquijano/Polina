import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SobreNosotros from "./SobreNosotros"


export const Main = () => {
  return (
<>
<Routes> <Route path='/SobreNosotros' element={<SobreNosotros />}></Route> </Routes>
</>
  )
}
 