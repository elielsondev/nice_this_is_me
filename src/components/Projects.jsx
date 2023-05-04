import React from 'react';
import data from '../APIFAKE';
import  canoe_digital_fm from '../components/images/canoe_digital_fm.gif';
import gerador_de_senha from '../components/images/gerador_de_senha.gif';
import desenvolvendo from '../components/images/desenvolvendo.gif';
import reactredux from '../components/images/reactredux.png';
import javascriptandes6 from '../components/images/javascriptandes6.png';
import '../App.css';

function Projects({language}) {
  return (
    <div>
        <section id='projects'>
            <span className='lineSpan'>___________________________________________</span>
            <h1 className='topicsStyle'>{data[language].project}</h1>
            <article>
              <div id='myProjects'>
                <a 
                  href="https://canoedigital.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='product'
                >
                  <img src={canoe_digital_fm} alt="Gerador de Senha" width='200px' />
                  <p>Canoé Digital FM</p>
                </a>

                <a 
                  href="https://geradordesenha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='product'
                > 
                  <img src={gerador_de_senha} alt="em desenvolvimento" width='200px' />
                  <p>Gerador de Senhas</p>
                </a>

                <a 
                  href="https://elielsondev.github.io/my-calculator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='product'
                >
                  <img src={desenvolvendo} alt="Calculadora" width='200px' />
                  <p>...</p> 
                </a>
              </div>

              <div id='myArticles'>
              <a 
                  href="https://github.com/elielsondev/redux_baby_steps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='article'
                >
                  <img src={reactredux} alt="React / Redux" className='articles' />
                  <p>Artigo - Redux in React.js Baby Steps</p>
                </a>

                <a 
                  href="https://github.com/elielsondev/starting_javascript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='article'
                >
                  <img src={javascriptandes6} alt="Starting JavaScript" className='articles' />
                  <p>Artigo - Starting JavaScript</p>   
                </a>
              </div>
            </article>
        </section>
    </div>
  )
}

export default Projects;
