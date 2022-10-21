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
              <div id='soft'>
                { data[language].softSkills.map((skill) => <h3 className='tec'>{skill}</h3>) }
              </div>
              { tecnology.map(({ image, name }) => (
                <div className="tec">
                  <img
                    src={image}
                    alt={name}
                    className='imgTec'
                  />
                  <h4 className='nameTec'>{name}</h4>
                </div>
              )) }
            </article>
        </section>
    </div>
  )
}

export default Skills;