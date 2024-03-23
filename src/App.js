import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Service from './components/Service';
import dummyText from './DummyText';
import "./App.css";
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
        <Navbar />
        <Home 
          id="section1"
        />
        <About
          id="section2"
        />
         <Service
          id="section3"
        />
        {/* <Team
          id="section4"
        /> */}
      
        <Contact
          id="section5"
        />
        <Footer />
      </div>
  );
}

export default App;