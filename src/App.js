import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Welcome from './components/Welcome';

function App() {
  const [ language, setLanguage ] = useState(0);

  return (
    <div>
      <Header language={ language } setLanguage={ setLanguage } />
      <Welcome language={ language } />
      <About language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  )
}

export default App;