import React from 'react'
import { NavBar } from './NavBar'
import { Main } from './Main'
import { SobreNosotros } from './SobreNosotros'
import { Carrousel } from './Carrousel'
import { Footer } from './Footer'

export const App = () => {
  return (
    
    <>
      <NavBar />
      <Main />
      <Carrousel />
      <SobreNosotros />
      <Footer />
    </>
  )
}

