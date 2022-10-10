import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testando o componente Header:', () => {
    it('Existem 3 imagens no componente Header', () => {
        render(<App />);

        const imagemPt = screen.getByRole('img', {
          name: /pt/i
        });

        const imagemEn = screen.getByRole('img', {
          name: /en/i
        });

        const imagemEs = screen.getByRole('img', {
          name: /es/i
        });
        
        expect(imagemPt).toBeInTheDocument();
        expect(imagemEn).toBeInTheDocument();
        expect(imagemEs).toBeInTheDocument();
    })

    it('Existe um h1 com o nome Elielson Nascimento', () => {
        render(<App />);

        const myName = screen.getByRole('heading', {
          name: /elielson nascimento/i
        })

        expect(myName).toBeInTheDocument();
    })

    it('Existem 4 links "Quem sou eu?", "Habilidades", "Projetos", "Contato"', () => {
      render(<App />);

      const whoIam = screen.getByRole('link', {
        name: /quem sou eu\?/i
      })

      const skills = screen.getByRole('link', {
        name: /habilidades/i
      })

      const projects = screen.getByRole('link', {
        name: /projetos/i
      })

      const contact = screen.getByRole('link', {
        name: /contato/i
      })

      expect(whoIam).toBeInTheDocument();
      expect(skills).toBeInTheDocument();
      expect(projects).toBeInTheDocument();
      expect(contact).toBeInTheDocument();
    })
})