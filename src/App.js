import React from "react";
import { NavBar } from "./NavBar";
import { Main } from "./Main";
import { SobreNosotros } from "./SobreNosotros";
import { Carrousel } from "./Carrousel";
import { Footer } from "./Footer";
import VideoCarrousel from "./VideoCarrousel";
import Productos from "./Productos";

export const App = () => {
  return (
    <>
      <NavBar />
      <Main />
      <Carrousel />
      <SobreNosotros />
      <VideoCarrousel />
      <Productos title="Rick and Morty" />
      <Footer />
    </>
  );
};
