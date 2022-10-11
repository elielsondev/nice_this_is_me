import React from 'react';
import data from '../APIFAKE';
import '../App.css';
import MyPhoto from './images/Elielson.jpg';

function Welcome({ language }) {
  return (
    <section id='sectionWelcome'>
        <main id='mainWelcome'>
            <h2 id='welcome'>{data[language].welcome}</h2>
            <h1 id='nameWelcome' className='name'>{data[language].name}</h1>
            <h3 id='profession'>{data[language].profession}</h3>
        </main>
        <div>
            <img
              src={MyPhoto}
              alt="Elielson Nascimento"
              id='profile'  
            />
        </div>
    </section>
  )
}

export default Welcome