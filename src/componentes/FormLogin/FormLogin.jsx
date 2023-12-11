import './FormLogin.css';
import Button from "../Button/Button";
import Input from "../Input/Input";

// formulário de login

export default function FormLogin ({ users, setLogged, setInvalid }) {

    // função que verifica se o nome e senha informados no submit
    // constam na lista de users, mudando para logado (setLogged) o estado do login
    // e fechando o modal, ou informa  que a tentativa é inválida
    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, password } = e.target
        for (let user of users) {
            if ((name.value.trim() === user.apelido || name.value.trim() === user.email) && password.value.trim() === user.password) {
                setLogged({ display: user.apelido, login: true})
                return
            }
        }
        setInvalid(true)
    }

    return (
        // renderiza dois inputs do formulário e o botão de submit, além
        // do link de ajuda e do botão que direciona para a criação de conta
        <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
            <h1 className='titulo-login'>LOGIN</h1>
            <Input type={'text'} id={'name'} text={"Apelido ou e-mail"} />
            <Input type={'password'} id={'password'} text={"Senha"} />
            <button className="form_submit" aria-label="Entrar">Entrar</button>
            <div className="form_ajuda">
                <a href="#!">Precisa de ajuda?</a>
            </div>
            <Button name={"form_conta"} text={"Criar conta"} />
        </form>
    )
}