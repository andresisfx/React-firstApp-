import { FirstApp } from "../src/FirstApp.jsx";
import { render } from "@testing-library/react";

describe('Pruebas en el componente <FirstApp />', () => {
    
    test('Debe hacer match con el snapshot', () => {
      
      const tittle = 'Hola, Soy Vegeta';
      const { container,  } = render( <FirstApp title={ tittle }/> );

      expect( container ).toMatchSnapshot();
    })


    test('Debe mostrar el título en  un h1 ', () => {
        
        const tittle = 'Hola, Soy Vegeta';
        const { container, getByText  } = render( <FirstApp title={ tittle } /> );
  
        expect( getByText(tittle) ).toBeTruthy();
        const h1 = container.querySelector('h1').innerHTML;
        expect( h1 ).toContain(tittle);
        
      })
})