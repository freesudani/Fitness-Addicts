import React from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyle';


function App() {
  return (
    <>
    <GlobalStyle />
     <NavBar />
     <Hero slides={SliderData}/>
    </>
  );
}

export default App;
