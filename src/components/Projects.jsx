import React from 'react';
import data from '../APIFAKE';
import tictactoe from '../components/images/tictactoe.gif';
import lottery from '../components/images/lottery.gif';
import calculator from '../components/images/calculator.gif';
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
                  href="https://elielsondev.github.io/tic-tac-toe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='product'
                >
                  <img src={tictactoe} alt="Jogo da Velha" width='200px' />
                  <p>Tic - Tac - Toe</p>
                </a>

                <a 
                  href="https://geradordejogomegasena.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='product'
                > 
                  <img src={lottery} alt="Jogo da Velha" width='200px' />
                  <p>Lottery</p>
                </a>

                <a 
                  href="https://elielsondev.github.io/my-calculator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='product'
                >
                  <img src={calculator} alt="Jogo da Velha" width='200px' />
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
                  <img src={reactredux} alt="Jogo da Velha" width='270px' />
                  <p>Artigo - Redux in React.js Baby Steps</p>
                </a>

                <a 
                  href="https://github.com/elielsondev/starting_javascript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='article'
                >
                  <img src={javascriptandes6} alt="Jogo da Velha" width='270px' />
                  <p>Artigo - Starting JavaScript</p>   
                </a>
              </div>
            </article>
        </section>
    </div>
  )
}

export default Projects;
