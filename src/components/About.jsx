import React from 'react';
import data from '../APIFAKE';
import '../App.css';

function About({ language }) {
  return (
    <section id='about'>
        <span className='lineSpan'>___________________________________________</span>
        <h1 className='topicsStyle'>{data[language].whoIam}</h1>
        <article>
            <p id='descriptionAbout'>{data[language].description}</p>
        </article>
    </section>
  )
}

export default About;