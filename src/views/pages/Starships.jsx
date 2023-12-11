// Importação de alguns hooks, bibliotecas do React e outros componentes e utilitários personalizados
import { useState, useEffect, useRef } from 'react';

import './Starships.css'; 

import List from "../../componentes/List/List"
import Button from '../../componentes/Button/Button';
import LoadingSpinner from '../../componentes/Spinner/Spinner'

import retrieveStarships from '../../logic/retrieve-starships'
import getData from '../../utils/getData';

import axios from 'axios';

// Exportação do componente principal chamado 'Starships'
export default function Starships() {
  // Armazena a lista de naves espaciais
  const [starshipList, setStarshipsList] = useState(null);
  // Armazena a próxima página de resultados
  const [page, setPage] = useState();
  // Armazena o objeto de cancelamento para as requisições axios
  const sourceRef = useRef(axios.CancelToken.source());

  // Efeito executado após a montagem do componente
  useEffect(() => {
    // Obtém a referência do cancelamento
    const source = sourceRef.current;
    // Recupera as naves espciais
    const getStarships = async () => {
      // Obtém os dados iniciais das naves espaciais
      const res = await retrieveStarships();
      // Atualiza o estado com a lista de naves e a próxima página
      setStarshipsList(res.results);
      setPage(res.next);
    }
    // Chama a função para obter as naves espaciais
    getStarships();

    // Função de limpeza executada quando o componente é desmontado
    return () => {
      // Se o componente estiver desmontado, cancela a requisição
      if (source) source.cancel("O componente de carregamento foi desmontado");
      // Limpa o estado
      setStarshipsList([]);
      setPage();
    };
  }, []);

  // Função para o carregamento de mais naves espaciais
  const handleAddNaus = async () => {
    // Verifica a existência de uma próxima página
    if (page) {
      // Obtém dados adicionais da próxima página
      const res = await getData(page);
      // Atualiza o estado com a lista existente e os novos resultados
      setStarshipsList([...starshipList, ...res.results]);
      // Atualiza a próxima página
      setPage(res.next);
    }
  };

  // Função para rolar até o topo da página
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  // Renderização condicional com base na existência da lista de naves
  return (
    <>
      {
        starshipList ? (
          <>
            {/** Seção para o fundo imagem e título */}
            <div className='caixa-naves-titulo'>
              <h1 className='titulo-naves'>NAVES ESPACIAIS</h1>
            </div>

            {/* Componente de lista para exibir as naves espaciais */}
            <List list={starshipList} page={'starships'} />

            {/* Condicional para exibir botão "VER MAIS" ou "VOLTAR" com base no número de naves */}
            {
              starshipList.length < 36 ? (
                <Button open={handleAddNaus} text={'VER MAIS'} name={'view__button'} />
              ) : null
            }
          </>
        ) : (
          // Exibe um spinner de carregamento se a lista de naves espaciais ainda não estiver carregada.
          <LoadingSpinner />
        )
      }
    </>
  );
}