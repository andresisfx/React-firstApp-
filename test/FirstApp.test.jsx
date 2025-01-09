import { FirstApp } from "../src/FirstApp.jsx";
import { render, screen } from "@testing-library/react";

describe('Pruebas en el componente <FirstApp />', () => {

  const title = 'Hola, Soy Vegeta';
  const subTitle = 'Soy soy Gokú';
    test('debe hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={ title } />);
        expect( container ).toMatchSnapshot();
    });
    
    test ('debe mostrar el mensaje "Hola, Soy Vegeta', () => {
        render(<FirstApp title={ title } />);
        expect( screen.getByText(title) ).toBeTruthy();
        // screen.debug(); 
    });

    test ('debe mostrar titulo en un h1', () => {
        render(<FirstApp title={title} subTitle={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    })

    test("debe mostrar el subtitulo enviado por props", () => {
        render(
              <FirstApp title={title} 
                        subTitle={subTitle}
               />);

        expect(screen.getAllByText(subTitle).length).toBe(2);
    })
})