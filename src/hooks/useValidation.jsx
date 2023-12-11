import { useState, useEffect } from "react";

// função que gerencia o estado dos valores, a verificação de erros e a submissão do formulário

// função que cria estado inicial e as funções que alteram esses estados
const useValidation = (validaInputs, validaForm, setIsValid) => {
    //valores do formulário
    const [values, setValues] = useState({});
    //erros de validação
    const [erros, setErros] = useState([]);
    //indica se submetido
    const [submit, setSubmit] = useState(false);

    // função chamada no onBlur (perca de foco), atualiza o estado do valor do campo (com key: value)
    // e chama a validaInputs para validar o campo e atualizar o estado com erros
    const handleBlur = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        setErros(validaInputs(name, value, erros));
    };
    
    // previne comportamento padrão do envio do formulário
    // chama a validaForm pra verificar erros e submete o form
    const handleSubmit = e => {
        e.preventDefault();
        setErros(validaForm(values));
        setSubmit(true)
    };

    // hook verifica se existem erros dentre os valores do formulário
    // se não houver, valida o formulário
    useEffect(() => {
        if (Object.values(erros).every(erro => erro === '') && submit) {
            setIsValid(true)
        } else {
            setSubmit(false)
        }
    }, [erros, setIsValid, submit])

    return { handleBlur, erros, handleSubmit, values }
};

export default useValidation;