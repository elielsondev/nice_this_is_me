import { fireEvent, render, screen, within } from '@testing-library/react';
import App from '../App';

describe('Testando o componente Header:', () => {
    it('Existem 3 imagens no componente Header', () => {
        render(<App />);

        const imagemPt = screen.getByAltText('PT');
        const imagemEn = screen.getByAltText('EN');
        const imagemEs = screen.getByAltText('ES');
        
        expect(imagemPt).toBeInTheDocument();
        expect(imagemEn).toBeInTheDocument();
        expect(imagemEs).toBeInTheDocument();
    })

    it('Existe um h1 com o nome Elielson Nascimento', () => {
        render(<App />);

        const banner = screen.getByRole('banner');

        const myName = within(banner).getByRole('heading', {
          name: /elielson nascimento/i
        });

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

    it('Ao ser clicado na imagem da U.K o idioma é mudado no Header', () => {
      render(<App />);

      fireEvent.click(screen.getByAltText('EN'));

      const whoIam = screen.getByRole('link', {
        name: /who i am\?/i
      })

      const skills = screen.getByRole('link', {
        name: /skills/i
      })

      const projects = screen.getByRole('link', {
        name: /projects/i
      })

      const contact = screen.getByRole('link', {
        name: /contact/i
      })

      expect(whoIam).toBeInTheDocument();
      expect(skills).toBeInTheDocument();
      expect(projects).toBeInTheDocument();
      expect(contact).toBeInTheDocument();
    })

    it('Ao ser clicado na imagem da Espanha o idioma é mudado no Header', () => {
      render(<App />);

      fireEvent.click(screen.getByAltText('ES'));

      const whoIam = screen.getByRole('link', {
        name: /quien soy yo\?/i
      })

      const skills = screen.getByRole('link', {
        name: /habilidades/i
      })

      const projects = screen.getByRole('link', {
        name: /proyectos/i
      })

      const contact = screen.getByRole('link', {
        name: /contacto/i
      })

      expect(whoIam).toBeInTheDocument();
      expect(skills).toBeInTheDocument();
      expect(projects).toBeInTheDocument();
      expect(contact).toBeInTheDocument();
    })
})