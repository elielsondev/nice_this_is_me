import React from 'react';
import data from '../APIFAKE';
import password_generator from '../components/images/gerador_de_senhas_aleatorias.gif';
import desenvolvendo from '../components/images/desenvolvendo.png';
import calculator from '../components/images/calculator.gif';
import reactredux from '../components/images/reactredux.png';
import javascriptandes6 from '../components/images/javascriptandes6.png';
import java from '../components/images/Java.jpg';
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
                  href="https://geradordesenha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='product'
                >
                  <img src={password_generator} alt="Gerador de Senha" width='200px' />
                  <p>Gerador de Senhas</p>
                </a>

                <a 
                  href="https://geradordejogomegasena.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='product'
                > 
                  <img src={desenvolvendo} alt="em desenvolvimento" width='200px' />
                  <p>Em manutenção</p>
                </a>

                <a 
                  href="https://elielsondev.github.io/my-calculator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='product'
                >
                  <img src={calculator} alt="Calculadora" width='200px' />
                  <p>Calculator</p> 
                </a>
              </div>

              <div id='myArticles'>
              <a 
                  href="https://github.com/elielsondev/redux_baby_steps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='article'
                >
                  <img src={reactredux} alt="React / Redux" width='200px' height='180px' />
                  <p>Artigo - Redux in React.js Baby Steps</p>
                </a>

                <a 
                  href="https://github.com/elielsondev/starting_javascript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='article'
                >
                  <img src={javascriptandes6} alt="Starting JavaScript" width='200px' height='180px' />
                  <p>Artigo - Starting JavaScript</p>   
                </a>

                <a 
                  href="https://github.com/elielsondev/trilha-java-basico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='article'
                >
                  <img src={java} alt="Trilha Java Básico" width='200px' height='180px' />
                  <p>Artigo - Trilha Java Básico</p>   
                </a>
              </div>
            </article>
        </section>
    </div>
  )
}

export default Projects;
