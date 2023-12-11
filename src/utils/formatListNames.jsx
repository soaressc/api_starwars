// Define uma função chamada formatListNames que recebe um valor (string) como argumento.

 // Converte a primeira letra da string para maiúscula. E substitui todas as ocorrências do caractere '_' (underscore) por um espaço em branco na string, a partir do segundo caractere.
const formatListNames = (value) => value.charAt(0).toUpperCase() + value.slice(1).replaceAll('_', ' ')

export default formatListNames