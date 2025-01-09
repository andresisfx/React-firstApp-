import { CounterApp } from "../src/CounterApp";
import { render,screen,fireEvent } from "@testing-library/react";

describe('Pruebas en <CounterApp />', () => {
  const value = 20;
    test('debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={ value } />);
        expect( container ).toMatchSnapshot();
    });

    test ('debe mostrar el valor inicial de 20', () => {
        render(<CounterApp value={ value } />);
        expect( screen.getByText(20) ).toBeTruthy();
    });

    test ("debe mostrar el valor inicial de 100 <CounterApp value={ 100 } />", () => {

        render(<CounterApp value={ 100 } />);
        expect( screen.getByText(100) ).toBeTruthy();
    })

    test ('debe incrementar con el boton +1', () => {
        render(<CounterApp value={ value } />);
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText(21) ).toBeTruthy();
    })

    test ('debe decrementar con el boton -1', () => {
        render(<CounterApp value={ value } />);
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText(19) ).toBeTruthy();
    })

    test ('debe resetear con el boton Reset', () => {
        render(<CounterApp value={ 355 } />);
        fireEvent.click( screen.getByText('-1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );
        expect( screen.getByText(355) ).toBeTruthy();
    })

})