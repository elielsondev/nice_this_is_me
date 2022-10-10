import { fireEvent, render, screen, within } from '@testing-library/react';
import App from '../App';

describe('Testando o component Welcome', () => {
    it('Verifica se a pagina abri com os itens esperados', () => {
        render(<App />);

        const hiIam = screen.getByRole('heading', { name: /oi, eu sou/i });
        expect(hiIam).toBeInTheDocument();

        const main = screen.getByRole('main');
        const myName = within(main).getByRole('heading', { name: /<elielson nascimento \/>/i });
        expect(myName).toBeInTheDocument();

        const proffession = screen.getByRole('heading', {
            name: /desenvolvedor de software - front-end/i
        });
        expect(proffession).toBeInTheDocument();
    })

    it('Verifica se ao ser clicado na img da U.K o texto muda para "Hi, I am"', () => {
        render(<App />);

        const banner = screen.getByRole('banner');
        fireEvent.click(within(banner).getByRole('img', { name: /en/i }));
        
        const hiIam = screen.getByRole('heading', { name: /hi, i am/i });
        
        expect(hiIam).toBeInTheDocument();
    })

    it('Verifica se ao ser clicado na img da Espanha o texto muda para "Hola soy yo"', () => {
        render(<App />);

        const banner = screen.getByRole('banner');
        fireEvent.click(within(banner).getByRole('img', { name: /es/i }));
        
        const hiIam = screen.getByRole('heading', { name: /hola soy yo/i });
        
        expect(hiIam).toBeInTheDocument();
    })

    it ('O nome da profissão é alterado conforme idioma selecionado, e o nome "Elielson Nascimento"', () => {
        render(<App />);

        const banner = screen.getByRole('banner');
        fireEvent.click(within(banner).getByRole('img', { name: /en/i }));
        const proffessionEn = screen.getByRole('heading', { name: /software developer - front end/i });
        expect(proffessionEn).toBeInTheDocument();

        const main = screen.getByRole('main');
        const myName = within(main).getByRole('heading', { name: /elielson nascimento/i });
        expect(myName).toBeInTheDocument();


        const banner2 = screen.getByRole('banner');
        fireEvent.click(within(banner2).getByRole('img', { name: /es/i }));
        const proffessionEs = screen.getByRole('heading', { name: /desenrrollador de software - interfaz/i });
        expect(proffessionEs).toBeInTheDocument();
        expect(myName).toBeInTheDocument();
    })
})
