import { FirstApp } from "../src/FirstApp.jsx";
import { render } from "@testing-library/react";

describe('Pruebas en el componente <FirstApp />', () => {
    
    test('Debe hacer match con el snapshot', () => {
      
      const tittle = 'Hola, Soy Vegeta';
      const { container,  } = render( <FirstApp title={tittle}/> );

      expect( container ).toMatchSnapshot();
    })


    test('Debe mostrar el título en  un h1 ', () => {
        
        const title = 'Hola, Soy Vegeta';
        const { container, getByText, getByTestId  } = render( <FirstApp title={title} /> );
  
        // expect( getByText(title) ).toBeTruthy();
        // const h1 = container.querySelector('h1').innerHTML;
        // expect( h1 ).toContain(tittle);

        expect( getByTestId('test-title').innerHTML ).toContain(title);

      })

    test('Debe mostrar el subtitulo enviado por props', () => {

        const tittle = 'Hola, Soy Vegeta';
        const subTitle = 'Soy un subtitulo';
        const { container, getAllByText } = render( <FirstApp title={ tittle } subTitle={ subTitle } /> );

        expect( getAllByText(subTitle).length ).toBe(2);

    })  
})