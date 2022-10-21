import React from 'react';
import data from '../APIFAKE';

function Contact({ language }) {
  return (
    <div>
        <section id='contact'>
            <span className='lineSpan'>___________________________________________</span>
            <h1 className='topicsStyle'>{data[language].contact}</h1>
        </section>
            
        <section id='myNet'>
            <a
              href='https://www.linkedin.com/in/elielsondev/'
              target='_blank'
              rel="noopener noreferrer"
              className="tec"
            >
              <h3 className='nameTec'>LinkedIn</h3>
              <img
                src="https://t.ctcdn.com.br/09Y6BbLFxNn7XGCYRGzEI0p0oy8=/400x400/smart/filters:format(webp)/i490027.jpeg"
                alt="LinkedIn"
                className='imgTec'
              />
            </a>

            <a
              href='https://github.com/elielsondev'
              target='_blank'
              rel="noopener noreferrer"
              className="tec"
            >
              <h3 className='nameTec'>GitHub</h3>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                alt="Github"
                className='imgTec'
              />
            </a>

            <a
              href='https://api.whatsapp.com/send?phone=5581992766543&text=Ol%C3%A1%2C%20vi%20seu%20portif%C3%B3lio%20e%20gostaria%20de%20saber%20mais%20sobre%20voc%C3%AA...'
              target='_blank'
              rel="noopener noreferrer"
              className="tec"
            >
                <h3 className='nameTec'>WhatsApp</h3>
                <img
                  src="https://cdn2.downdetector.com/static/uploads/logo/whatsapp-messenger.png"
                  alt="WhatsApp"
                  className='imgTec'
                />
            </a>

            <a
              href='https://form.jotform.com/222927711736056'
              target='_blank'
              rel="noopener noreferrer"
              className="tec"
            >
                <h3 className='nameTec'>Gmail</h3>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png"
                  alt="Gmail"
                  className='imgTec'
                />
            </a>
        </section>
    </div>
  )
}

export default Contact;