// importando o css do List e uma imagem para o ícone das listas de naves e personagens
import './List.css'

import Icon from "../../assets/images/Death-Star.png";

 // Este componente List é usado para renderizar listas de naves espaciais (starships) e atores (actors). Ele verifica a propriedade page para determinar qual tipo de lista está sendo fornecida e renderiza os dados correspondentes.
export default function List ({ list, page }) {
  return (
    <ul className="list" aria-label="starships list">
      {
        // Verifica se há uma lista e se a página é 'starships'
        list && page === 'starships' && (
          // Mapeia cada item da lista de naves (starships)
          list.map((starships, index) => {
            return (
              // Renderiza um item da lista
              <li className="list__item list__item--actor" data-testid={`element-${index}`}>
                <div className='icon-name-div'>
                  <div className="icon-bg">
                    {/* Exibe um ícone de estrela da morte */}
                    <img className="icon-nave" src={Icon} alt='icon estrela da morte'></img>
                  </div>
                  {/* Exibe os dados da nave */}
                  <div className="box-dados-naves">
                    <h3>Nome: {starships.name}</h3>
                    <p>Modelo: {starships.model}</p>
                    <p>Fabricante: {starships.manufacturer}</p>
                    <p>Custo em créditos: {starships.cost_in_credits}</p>
                    <p>Tamanho: {starships.length}</p>
                    <p>Velocidade Atmosférica: {starships.max_atmosphering_speed}</p>
                    <p>Tripulação: {starships.crew}</p>
                  </div>
                </div>
              </li>
            )
          })
        )
      }
      {
        // Verifica se há uma lista e se a página é 'actors'
        list && page === 'actors' && (
          // Mapeia cada item da lista de atores
          list.map((actor, id) => {
            return (
              // Renderiza um item da lista
              <li className="list__item list__item--actor">
                <div className='icon-name-div'>
                  <div className="icon-bg">
                    {/* Exibe um ícone de estrela da morte */}
                    <img className="icon-nave" src={Icon} alt='icon estrela da morte'></img>
                  </div>
                  {/* Exibe os dados do ator */}
                  <div className="box-dados-ator">
                    <h3>{actor.name}</h3>
                    <p>Altura: {actor.height}</p>
                    <p>Peso: {actor.mass} kg</p>
                    <p>Cor do cabelo: {actor.hair_color}</p>
                    <p>Nascimento: {actor.birth_year}</p>
                  </div>
                </div>
              </li>
            )
          })
        )
      }
    </ul>
  )
}
