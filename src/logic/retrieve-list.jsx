// Importa a função getData de um arquivo utilitário que contém uma lógica para realizar solicitações HTTP.
import getData from "../utils/getData"

// Define uma função assíncrona chamada retrieveList, que recebe um array de URLs como argumento.
const retrieveList = async (array) => {
   // Inicializa um array vazio chamado dataList para armazenar os dados recuperados das solicitações.
  let dataList = []
  // Itera sobre cada URL no array de URLs.
  for (let url of array) {
     // Faz uma solicitação assíncrona à URL usando a função getData e adiciona o resultado ao array dataList.
    dataList = [...dataList, await getData(url)]
  }
  // Retorna o array dataList que agora contém os dados recuperados de todas as solicitações.
  return dataList
}

// Exporta a função retrieveList para que possa ser utilizada em outros módulos ou arquivos.
export default retrieveList