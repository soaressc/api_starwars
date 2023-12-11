//Este conjunto de testes verifica se o componente List renderiza corretamente com base em dados simulados. 

// Importa as funções de renderização e seleção de elementos do React Testing Library.
import { render, screen } from '@testing-library/react'
// Importa o componente de roteamento do React.
import { BrowserRouter as Router } from 'react-router-dom'
// Importa o componente List que será testado.
import List from '../List'

// Cria uma matriz com 10 objetos vazios para simular dados de naves espaciais.
const mockedStarships = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

// Antes de cada teste, renderiza o componente List dentro de um componente Router com os dados simulados.
beforeEach(() => {
  render(
    <Router>
      <List starships={mockedStarships} />
    </Router>
  )
})

// Descreve o conjunto de testes para a lista de naves espaciais.
describe('starships list', () => {
  // Testa se um elemento específico da lista é renderizado.
  test('render 1 element', () => {
     // Seleciona um elemento específico da lista com base no atributo 'data-testid'.
    const listElement = screen.getByTestId('element-2')
    // Verifica se o elemento está presente no documento.
    expect(listElement).toBeInTheDocument()
  })

  // Testa se todos os elementos da lista são renderizados.
  test('render 10 elements', () => {
    // Seleciona todos os elementos da lista com base em expressão regular
    const listElements = screen.getAllByTestId(/element/i)
     // Verifica se o número de elementos selecionados é igual a 10.
    expect(listElements.length).toBe(10)
  })
})

