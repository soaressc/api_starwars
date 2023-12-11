import { useState, useEffect } from "react";

// mantém um array no armazenamento local com informações dos usuários e
// preserva estado da aplicação entre as sessões

// retorna valor salvo em um arquivo JSON salvo no armazenamento local.
// se não houver correspondente à key retorna valor inicial (ou um array vazio caso valor não seja fornecido)
const getSalvo = (key, valorInicial = []) => {
    const valorSalvo = JSON.parse(localStorage.getItem(key))
    if (valorSalvo) return valorSalvo
    else return valorInicial
}

// o hook recebe uma key como argumento e utiliza o useState para iniciar um array com valor fornecido
// pela função getSalvo
export default function useLocalstorage (key) {
    const [array, setArray] = useState(() => {
        return getSalvo(key)
    })

// hook que atualiza os valores associados à key no armazenamento local com localstorage.setItem
// e retorna o estado desse esse array e a função que o atualiza
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(array))
    }, [array, key])

    return [array, setArray]
}