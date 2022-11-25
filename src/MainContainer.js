import React from 'react'
import { Carrousel } from './Carrousel.js'
import { SobreNosotros } from './SobreNosotros.js'
import VideoCarrousel from './VideoCarrousel.js'

const MainContainer = () => {
  return (
    <>
      <Carrousel />
      <SobreNosotros />
      <VideoCarrousel />
    </>
  )
}
export default MainContainer