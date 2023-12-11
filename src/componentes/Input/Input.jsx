import './Input.css';

// cria componente de input do formulário que exibe caso haja algum erro
export default function Input ({ type, id, text, validation, erro })  {
    return (
        <div className="campo-input">
        {/* classe do input modifica para input--erro caso existam erros no valor do input */}
        <span className="nome-do-campo">{text}</span><input type={type} name={id} id={id} aria-required="true" maxLength="60"
        className={erro ? 'input input--erro' : 'input'} placeholder={text} onBlur={validation} />
        {/* exibe o erro do input */}
        <p className="input_erros">{erro}</p>
        </div>
    )
}