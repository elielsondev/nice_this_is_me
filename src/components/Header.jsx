import React from 'react';
import data from '../APIFAKE';
import '../App.css';

function Header({ language, setLanguage }) {
  return (
    <header className='header'>
      <nav  className='box-language'>
        <img src={ data[0].flagUrl } alt="PT" onClick={ () => setLanguage(0) } className='flag' />
        <img src={ data[1].flagUrl } alt="EN" onClick={ () => setLanguage(1) } className='flag' />
        <img src={ data[2].flagUrl } alt="ES" onClick={ () => setLanguage(2) } className='flag' />
      </nav>
    
      <h1 className='name'>{data[language].name}</h1>
      
      <nav className='box-menu'>
        <a href="a" className='menu'>{data[language].whoIam}</a>
        <a href="b" className='menu'>{data[language].skills}</a>
        <a href="c" className='menu'>{data[language].project}</a>
        <a href="d" className='menu'>{data[language].contact}</a>
      </nav>
    </header>
  )
}

export default Header