// Importa a biblioteca Axios para realizar solicitações HTTP.
import axios from "axios";

// Define uma função assíncrona chamada getData que recebe uma URL como argumento.
const getData = async (url) => {
  try {
    // Faz uma solicitação HTTP do tipo GET para a URL fornecida.
    const res = await axios.get(url);

    // Extrai os dados da resposta da solicitação.
    const result = await res.data;

    // Retorna os dados obtidos da solicitação.
    return result;
  } catch (err) {
    // Captura erros que podem ocorrer durante a solicitação.

    // Verifica se o erro é devido a uma solicitação cancelada.
    if (axios.isCancel(err)) {
      console.log('axios cancel');
    } else {
      // Se não for um erro de solicitação cancelada, imprime o erro no console.
      console.log(err);
    }
  }
}

// Exporta a função getData para que ela possa ser utilizada em outros módulos ou arquivos.
export default getData;
