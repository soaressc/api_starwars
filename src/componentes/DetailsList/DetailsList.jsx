// importando componentes e bibliotecas necessárias
import React from 'react';
import { Link } from 'react-router-dom';
import './DetailsList.css';
import formatListNames from '../../utils/formatListNames';

// Componente funcional chamado DetailsList que recebe as propriedades (props) list, names e id.
export default function DetailsList({ list, names, id }) {
  return (
     // Retorna uma lista não ordenada (<ul>) com a classe CSS 'section__list'.
    <ul className={`section__list`}>
       {/* Mapeia cada item na lista para gerar um elemento de lista (<li>). */}
      {list.map((item, index) => (
        <li key={index} className={`section__item`}>
           {/* Mapeia cada nome na lista de nomes para gerar elementos de parágrafo (<p>). */}
          {names.map((name, index) => {
           // Verifica se o nome é 'name' ou 'title'.
            if (name === 'name' || name === 'title') {
              // Se for 'name' ou 'title', cria um link para a rota com base no ID e no URL do item.
              return (
                <Link
                  to={id ? `/${id}/${item.url.match(/[0-9]+/)[0]}` : '#!'}
                  key={index}
                >
                  {/* Cria um parágrafo (<p>) com a classe CSS 'section__name' ou 'section__title' e exibe o valor correspondente no item. */}
                  <p className={`section__${name}`}>{item[name]}</p>
                </Link>
              );
            } else {
              // Se não for 'name' ou 'title', cria um parágrafo (<p>) com a classe CSS 'section__' + nome e exibe o nome formatado e o valor correspondente no item.
              return (
                <p key={index} className={`section__${name}`}>
                  {formatListNames(name)}: {item[name]}
                </p>
              );
            }
          })}
        </li>
      ))}
    </ul>
  );
}



