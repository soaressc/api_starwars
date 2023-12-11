export default function validateForm (values) {
  let errors = {}

  if (!values.firstname) {
    errors.firstname = "Please enter your first name."
  }

  if (!values.lastname) {
    errors.lastname = "Please enter your last name."
  }// função de validação do formulário, retorna erros de acordo com a entrada dos valores

  export default function validaForm(values) {
      let erros = {}

      // verifica se o campo de nome está em branco
      if (!values.primeironome) {
          erros.primeironome = "Entre com seu primeiro nome"
      }

      // verifica se o campo sobrenome está em branco
      if (!values.sobrenome) {
          erros.sobrenome = "Entre com seu sobrenome"
      }

      // verifica se o campo de email está em branco
      // se tiver valores no campo, verifica se tem @ e . de acordo com regex
      if (!values.email) {
          erros.email = "Entre com seu endereço de e-mail"
      } else if (!/\S+@\S+\.\S+/.test(values.email)){
          erros.email = "Entre com endereço de e-mail válido"
      }

      // verifica se o campo de apelido tem menos de 4 caracteres
      if (values.apelido && values.apelido.length < 4) {
          erros.apelido = "Use ao menos 4 caracteres"
      }

      // verifica se o campo senha está em branco
      if (!values.password) {
          erros.password = 'Entre com uma senha'
      // verifica se a senha tem ao menos 6 caracteres
      } else if (values.password.length < 6) {
          erros.password = 'A senha é muito curta'
      // verifica se utiliza letras e números e retorna erro se tiver só letras ou só números
      } else if (!/^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i.test(values.password)) {
          erros.password = 'A senha precisa ter letras e números'
      }

      return erros;
  }

  if (!values.email) {
    errors.email = 'Please enter your email address.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (values.displayname && values.displayname.length < 4) {
    errors.displayname = "Use at least 4 characters."
  }

  if (!values.password) {
    errors.password = 'Please enter a password.';
  } else if (values.password.length < 6) {
    errors.password = 'The password is too short.';
  } else if (!/^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i.test(values.password)) {
    errors.password = 'The password is too easily guessed.'
  }

  return errors;
}
