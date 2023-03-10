import React from 'react';
import data from '../APIFAKE';
import '../App.css';
import curriculo from './docs/ElielsonNascimento.pdf';
import iconDownload from './images/download_icon.png';

function Header({ language, setLanguage }) {
  return (
    <header className='header'>
      <nav  className='box-language'>
        <img src={ data[0].flagUrl } alt="PT" onClick={ () => setLanguage(0) } className='flag' />
        <img src={ data[1].flagUrl } alt="EN" onClick={ () => setLanguage(1) } className='flag' />
        <img src={ data[2].flagUrl } alt="ES" onClick={ () => setLanguage(2) } className='flag' />
      </nav>
    
      <h1 className='name'>
        <a className='name' href="#sectionWelcome">
          {data[language].name}
        </a>
      </h1>
      
      <nav className='box-menu'>
        <a href="#about" className='menu'>{data[language].whoIam}</a>
        <a href="#skills" className='menu'>{data[language].skills}</a>
        <a href="#projects" className='menu'>{data[language].project}</a>
        <a href="#contact" className='menu'>{data[language].contact}</a>

        <div id='download-cv'>
          <a href={curriculo} download="curriculo_elielson_desenvolvedor_fullStack">
          <img src={iconDownload} alt="Download CV" />
        </a>
      </div>
      </nav>
    </header>
  )
}

export default Header;