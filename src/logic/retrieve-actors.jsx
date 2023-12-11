// Importa a função getData de um arquivo utilitário que contém a lógica para realizar solicitações HTTP.
import getData from "../utils/getData"

// Importa a constante initialActorsUrl do arquivo de constantes, que armazena a URL inicial da API para obter informações sobre atores/personagens.
import { initialActorsUrl } from "./../constants/index"

// Define uma função assíncrona chamada retrieveActors.
const retrieveActors = async () => await getData(initialActorsUrl)

// Exporta a função retrieveActors para que possa ser utilizada em outros módulos ou arquivos.
export default retrieveActors