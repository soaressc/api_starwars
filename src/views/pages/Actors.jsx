// importando componentes e bibliotecas
import { useState, useEffect, useRef } from 'react';
import './Actors.css'
import List from "../../componentes/List/List"
import Button from '../../componentes/Button/Button';
import LoadingSpinner from '../../componentes/Spinner/Spinner'
import retrieveActors from '../../logic/retrieve-actors'
import getData from '../../utils/getData';
import axios from 'axios'

export default function Actors() {
  // Estado para armazenar a lista de atores
  const [actorsList, setActorsList] = useState(null)
  // Estado para gerenciar as informações de paginação
  const [page, setPage] = useState()
  // Ref para armazenar o cancel token source para as requisições axios
  const sourceRef = useRef(axios.CancelToken.source())

  // useEffect é utilizado para efeitos colaterais e gerenciamento de ciclo de vida
  useEffect(() => {
    // Recupera o cancel token source da ref
    const source = sourceRef.current
    // Função para buscar dados dos atores de forma assíncrona
    const getActors = async () => {
      // Chama a função retrieveActors para obter os dados iniciais
      const res = await retrieveActors()
      // Define o estado actorsList com os resultados
      setActorsList(res.results)
      // Define o estado page com as informações da próxima página
      setPage(res.next)
    }
    // Chama a função getActors
    getActors()

    // Função de limpeza para cancelar a requisição axios e resetar os estados
    return () => {
      if (source) source.cancel("Landing Component got unmounted");
      setActorsList([])
      setPage()
    }
  }, []) // Array de dependências vazio significa que este efeito é executado apenas uma vez, no momento da montagem

  // Função para lidar com a adição de mais atores ao clicar no botão
  const handleAddActors = async () => {
    // Verifica se há uma próxima página
    if (page) {
      // Obtém dados para a próxima página
      const res = await getData(page)
      // Atualiza o estado actorsList com os novos dados
      setActorsList([...actorsList, ...res.results])
      // Atualiza o estado page com as informações da próxima página
      setPage(res.next)
    }
  }

  return (
    <>
      {
        actorsList ? (
          <>
             {/** Fundo de imagem e título */}
             <div className='caixa-personagens-titulo'>
               <h1 className='titulo-personagens'>PERSONAGENS</h1>
             </div>
            {/* Componente List para exibir a lista de atores */}
            <List list={actorsList} page={'actors'} />

            {/* Condicional para renderizar o botão "VER MAIS" ou "VOLTAR AO TOPO" com base na quantidade de atores */}
            {
              actorsList.length < 82 ? (
                <Button open={handleAddActors} text={'VER MAIS'} name={'view__button'} />
              ) : null
            }
          </>
        ) : (
          // Se actorsList for nulo, exibe o componente LoadingSpinner
          <LoadingSpinner />
        )
      }
    </>
  )
}

