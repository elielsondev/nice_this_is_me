import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';

function App() {
  const [ language, setLanguage ] = useState(0);

  return (
    <div>
      <Header language={ language } setLanguage={ setLanguage } />
      <Welcome language={ language } />
    </div>
  )
}

export default App;