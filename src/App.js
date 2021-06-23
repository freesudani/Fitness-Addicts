import React, {useState} from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyle';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';
import Footer from './components/Footer';


function App() {
 const [isOpen, setIsOpen] = useState(false)

 const toggle = () => {
   setIsOpen(!isOpen)
 }

  return (
    <>
    <GlobalStyle />
     <NavBar toggle={toggle}/>
     <Dropdown  isOpen={isOpen} toggle={toggle} />
     <Hero slides={SliderData}/>
     <InfoSection {...InfoData}/>
     <Footer />
    </>
  );
}

export default App;
