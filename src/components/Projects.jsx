import React from 'react';
import data from '../APIFAKE';
import '../App.css';

function Projects({language}) {
  return (
    <div>
        <section id='projects'>
            <span className='lineSpan'>___________________________________________</span>
            <h1 className='topicsStyle'>{data[language].project}</h1>
            <article>
                <div>
                    <img
                    src=""
                    alt="foto do projeto"
                    />
                    <h4>Nome do projeto</h4>
                </div>
            </article>
        </section>
    </div>
  )
}

export default Projects;
