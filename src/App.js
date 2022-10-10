import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [ language, setLanguage ] = useState(0);

  return (
    <div>
      <Header language={ language } setLanguage={ setLanguage } />
    </div>
  )
}

export default App;