// Importa a função getData de um arquivo utilitário que contém a lógica para realizar solicitações HTTP.
import getData from "../utils/getData";

// Importa a constante initialStarshipsUrl do arquivo de constantes, que armazena a URL inicial da API para obter informações sobre naves espaciais.
import { initialStarshipsUrl } from "./../constants/index"

// Define uma função assíncrona chamada retrieveStarships.
const retrieveStarships = async () => await getData(initialStarshipsUrl)

// Exporta a função retrieveStarships para que possa ser utilizada em outros módulos ou arquivos.
export default retrieveStarships

