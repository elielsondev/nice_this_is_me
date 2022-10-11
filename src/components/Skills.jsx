import React from 'react';
import data from '../APIFAKE';
import tecnology from '../stacks';
import '../App.css';

function Skills({ language }) {
  return (
    <div>
        <section id='skills'>
            <span className='lineSpan'>___________________________________________</span>
            <h1 className='topicsStyle'>{data[language].skills}</h1>
            <article id='skillArea'>
              { tecnology.map(({ image, name }) => (
                <div id="tec">
                  <img
                    src={image}
                    alt={name}
                    id='imgTec'
                  />
                <h4 id='nameTec'>{name}</h4>
            </div>
              )) }
            </article>
        </section>
    </div>
  )
}

export default Skills;