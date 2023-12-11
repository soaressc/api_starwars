//Esses arrays fornecem uma estrutura organizada para selecionar atributos específicos ao trabalhar com informações sobre pilotos, filmes e naves espaciais

// Define um array 'pilotsList' contendo os atributos que se deseja extrair de informações sobre pilotos/personagens.
const pilotsList = ['name', 'height', 'mass', 'hair_color', 'eye_color', 'birth_year', 'gender']

// Define um array 'filmsList' contendo os atributos que se deseja extrair de informações sobre filmes.
const filmsList = ['title', 'episode_id', 'director', 'producer', 'release_date']

// Define um array 'starshipsList' contendo os atributos que se deseja extrair de informações sobre naves espaciais.
const starshipsList = ['name', 'model', 'manufacturer', 'cost_in_credits', 'length', 'max_atmosphering_speed', 'crew']

// Exporta os arrays para que possam ser importados e utilizados em outros arquivos.
export { pilotsList, filmsList, starshipsList }
