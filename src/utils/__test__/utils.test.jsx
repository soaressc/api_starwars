// Importa a biblioteca Axios para realizar solicitações HTTP.
import axios from 'axios';

// Importa a função formatListNames do arquivo chamado 'formatListNames'.
import formatListNames from '../formatListNames';

// Importa a função getData do arquivo chamado 'getData'.
import getData from '../getData';

// Declara uma string 'eye_color' para ser usada nos testes.
const string = 'eye_color';

// Faz um mock da biblioteca Axios para controlar e simular solicitações HTTP em testes.
jest.mock('axios');

// Descreve um conjunto de testes para a função formatListNames.
describe('formatListNames', () => {
  // Testa se a função formatListNames está definida.
  test('should be declared', () => {
    expect(formatListNames).toBeDefined();
  });

  // Testa se a função formatListNames retorna a string capitalizada corretamente.
  test('return string Capitalized', () => {
    expect(formatListNames(string)).toEqual('Eye color');
  });
});

// Descreve um conjunto de testes para a função getData.
describe('getData', () => {
  // Testa se a função getData obtém dados com sucesso de uma API.
  test('get data successfully from an API', async () => {
    // Define um objeto de dados simulados.
    const data = {
      starships: [],
      films: [],
      year: 2021
    };

    // Simula a implementação da função axios.get para retornar uma Promise resolvida com os dados simulados.
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    // Aguarda que a função getData retorne os dados simulados.
    await expect(getData('url')).resolves.toEqual(data);
  });

  // Testa se a função getData lida com erros ao obter dados de uma API.
  test('get data erroneously from an API', async () => {
    // Define uma mensagem de erro simulada.
    const errorMessage = 'Error';

    // Simula a implementação da função axios.get para retornar uma Promise rejeitada com um erro simulado.
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    // Aguarda que a função getData gere uma exceção com a mensagem de erro simulada.
    await expect(getData('url')).rejects.toThrow(errorMessage);
  });
});
