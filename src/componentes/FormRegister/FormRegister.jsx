import { useState, useEffect } from "react";
import './FormRegister.css';
import Input from "../Input/Input";
import useValidation from '../../hooks/useValidation';
import validaInputs from '../../logic/validate-inputs';
import validaForm from '../../logic/validate-inputs';

// renderiza um  formulário de cadastro

export default function FormRegister ({ setUsers, setSuccessRegister }) {
    // lista de condições
    const [selectAria, setSelectAria] = useState(false)
    // mostra senha ou não
    const [mostraSenha, setMostraSenha] = useState(false)
    // estado de validação
    const [isValid, setIsValid] = useState(false)
    // hook de verificação
    const { handleBlur, erros, handleSubmit, values } = useValidation(validaInputs, validaForm, setIsValid)

    // verifica por meio do isValid se os valores inseridos no formulário
    // e os adicionam ao array, definindo o setSuccessRegister como true
    // para indicar o sucesso do cadastro
    useEffect(() => {
        if (isValid) {
            setUsers(users => [...users, values])
            setSuccessRegister(true)
        }
    }, [isValid, setUsers, values, setSuccessRegister]);

    return (
        // inputs para os dados do cadastro
        <form className="signup_form" onSubmit={handleSubmit}>
            <h1 className='titulo-register'>SIGN UP</h1>
            <Input type={'text'} id={'primeironome'} text={'Primeiro nome'} validation={handleBlur} erro={erros.primeironome} />
            <Input type={'text'} id={'sobrenome'} text={'Sobrenome'} validation={handleBlur} erro={erros.sobrenome} />
            <Input type={'email'} id={'email'} text={'Endereço de e-mail'} validation={handleBlur} erro={erros.email} />
            <Input type={'text'} id={'apelido'} text={'Apelido'} validation={handleBlur} erro={erros.apelido} />

            <div>
                {/* exibe senha ou não de acordo com o estado do mostraSenha
                estilização de acordo com os erros, ativa e desativa conforme
                condições para senha e renderiza checkbox de mostrar senha */}
                <input type={mostraSenha ? 'text'  : 'password'}
                name="password"
                id="password"
                maxLength="60"
                className={!erros.password ? "input input--expand" : "input input--expand input--erro"}
                placeholder="Senha"
                onFocus={() => setSelectAria(true)}
                onBlur={(e) => { handleBlur(e); setSelectAria(false) }}
                onKeyUp={handleBlur}
                />
                {/* condições para senha */}
                <p className="input-erros">{erros.password}</p>
                <ul className={selectAria ? "form_lista form_lista--show" : "form_lista"}>
                    <li className={erros.password === "A senha é muito curta" ? "form_condicao--erro" : ''}>Use ao menos 6 caracteres</li>
                    <li>Não use a senha de outra conta</li>
                    <li className={erros.password === "A senha precisa ter letras e números" ? "form_condicao--erro" : ''}>Use uma combinação de letras e números</li>
                </ul>
                {/* checkbox para mostrar senha ou não */}
                <div className="form_show">
                    <input type="checkbox" name="show" id="show" className="form_checkbox" onClick={() => setMostraSenha(!mostraSenha)} />
                    <label htmlFor="show">Mostrar senha</label>
                </div>
            </div>

            {/* botão para criar conta e link para ir para modal de login */}
            <button className="form_submit" aria-label="Criar conta">Criar conta</button>
            <p className="form_footer">Já tem uma conta? <a href="#!">Entrar</a></p>
        </form>
    )
}