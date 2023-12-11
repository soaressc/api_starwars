// Importa funções e utilidades do Testing Library para renderização, seleção de elementos e simulação de eventos.
import { render, screen, fireEvent } from '@testing-library/react';

// Importa o componente Button que será testado.
import Button from '../Button';

// Descreve um conjunto de testes relacionados aos botões do modal.
describe('modal buttons test', () => {
  // Testa se o botão de login é clicável e chama a função de abertura do modal de login.
  test('onClick open login modal', () => {
    // Cria uma função simulada (jest.fn()) para lidar com a abertura do modal de login.
    const handleOpenLogin = jest.fn();

    // Renderiza o componente Button com a função simulada e o texto 'log in'.
    render(<Button open={handleOpenLogin} text='log in' />);

    // Seleciona o botão de login com base no texto 'log in'.
    const loginButton = screen.getByText(/log in/i);

    // Simula um clique no botão de login.
    fireEvent.click(loginButton);

    // Verifica se a função simulada de abertura do modal de login foi chamada uma vez.
    expect(handleOpenLogin).toHaveBeenCalledTimes(1);
  });

  // Testa se o botão de inscrição é clicável e chama a função de abertura do modal de inscrição.
  test('onClick open signup modal', () => {
    // Cria uma função simulada (jest.fn()) para lidar com a abertura do modal de inscrição.
    const handleOpenSignup = jest.fn();

    // Renderiza o componente Button com a função simulada e o texto 'sign up'.
    render(<Button open={handleOpenSignup} text='sign up' />);

    // Seleciona o botão de inscrição com base no texto 'sign up'.
    const signupButton = screen.getByText(/sign up/i);

    // Simula um clique no botão de inscrição.
    fireEvent.click(signupButton);

    // Verifica se a função simulada de abertura do modal de inscrição foi chamada uma vez.
    expect(handleOpenSignup).toHaveBeenCalledTimes(1);
  });
});
