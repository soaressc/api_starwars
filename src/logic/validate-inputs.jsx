// função de validação que retorna mensagens de erro no formulário
// específicas para cada campo de input

export default function validaInputs (name, value, erros) {
    let erro = ''

    // campo nome
    if (name === 'primeironome') {
        if (!value.trim()) {
            erro = "Entre com o primeiro nome"
        }
    }

    // campo sobrenome
    if (name === 'sobrenome') {
        if (!value.trim()) {
            erro = "Entre com o sobrenome"
        }
    }

    // campo email
    if (name === 'email') {
        if (!value) {
            erro = 'Entre com endereço de e-mail'
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            erro = 'Entre com endereço de e-mail válido'
        }
    }

    // campo apelido
    if (name === 'apelido') {
      if (!value) {
        erro = 'Entre com apelido'
      } else if (value.length < 4) {
        erro = 'Use ao menos 4 caracteres'  
      }
    }

    // campo senha
    if (name === 'password') {
        if (!value) {
            erro = 'Entre com uma senha'
        } else if (value.length < 6) {
            erro = 'A senha é muito curta'
        } else if (!/^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i.test(value)) {
            erro = 'A senha precisa ter letras e números'
        }
    }

    // retorna objeto que possui os erros anteriores e a
    // mensagem de erro para o campo específico
    return { ...erros, [name]: erro }
}