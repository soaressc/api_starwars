// import { useState, useEffect, useRef } from 'react'
// import { useParams } from 'react-router'

// import './DetailsActor.css'

// // import { starshipsList, filmsList } from "../../data/index"

// import getData from '../../utils/getData'
// import retrieveList from '../../logic/retrieve-list'
// import DetailsList from "../../componentes/DetailsList/DetailsList";
// import LoadingSpinner from '../../componentes/Spinner/Spinner'
// import IconSt from '../../assets/images/Death-Star.png';

// import axios from 'axios'


// export default function DetailsActors () {
//   const { id } = useParams()
//   const [actor, setActor] = useState(null)
//   const [starships, setStarships] = useState(null)
//   const [films, setFilms] = useState(null)
//   const [dataIsLoading, setDataIsLoading] = useState(true)


//   const sourceRef = useRef(axios.CancelToken.source())

//   useEffect(() => {
//     const source = sourceRef.current
//     const getActor = async () => {
//       const dataActor = await getData(`https://swapi.dev/api/people/2/`);
//       setActor(dataActor)
//       console.log(dataActor);
//       // const dataStarships = await retrieveList(dataActor.starships)
//       // setStarships(dataStarships)
//       const dataFilms = await retrieveList(dataActor.films)
//       setFilms(dataFilms)
//       setDataIsLoading(false)
//     }
//     getActor()

//     return () => {
//       if (source) source.cancel("Landing Component got unmounted");
//       setActor(null)
//       setStarships(null)
//       setFilms(null)
//     }
//   }, [id])


//   return (
//     <>
//       <div className="details">
//         {
//           actor && (
//             <div className="actor">
//               <h3>{actor.name}</h3>
//               <div className="actor__details">
//                 <div className='personagem-caixa-1'>
//                   <div className='icon-caixa-st'>
//                     <img src={IconSt} alt='icon estrela da morte de star wars' className='icon-st'></img>
//                   </div>
//                   <p className="actor__detail">Atura: {actor.height}</p>
//                   <p className="actor__detail">Peso: {actor.mass} kg</p>
//                   <p className="actor__detail">Cor do cabelo: {actor.hair_color}</p>
//                 </div>
//                 <div className='personagem-caixa-2'>
//                 <div className='icon-caixa-st'>
//                     <img src={IconSt} alt='icon estrela da morte de star wars' className='icon-st'></img>
//                   </div>
//                   <p className="actor__detail">Cor do olho: {actor.skin_color}</p>
//                   <p className="actor__detail">Ano de nascimento: {actor.birth_year}</p>
//                   <p className="actor__detail">Gênero: {actor.gender}</p>
//                 </div>
//               </div>

//             </div>

//           )
//         }
//       </div>

//       <div className="section">
//         {
//           starships && starships.length > 0 && (
//             <>
//               <h3 className="section__header">NAVES</h3>
//               <DetailsList list={starships} names={starshipsList} id={'starships'} />
//               <div className='personagem-caixa-3'>
//                 <div className='icon-caixa-st'>
//                     {/* <img src={IconSt} alt='icon estrela da morte de star wars' className='icon-st'></img> */}
//                   </div>

//                   <div className="titulo-filmes">
//                       <h1 className="filme-t">FILMES </h1>
//                   </div>  

//                   <div className="caixa-film-container">
//                     {films &&
//                     films.map((film, index) => (
//                     <div className="" key={index}>
//                       <div className="caixa-film-1">
//                         <h3 className="titulo-film-2"> Título: {film.title} </h3>
//                         <p> Episódio: {film.episode_id}</p>
//                         <p> Diretor: {film.director}</p>
//                         <p> Lançamento: {film.release_date}</p>
//                       </div>
//                   </div>
                  
//                   ))}
            
//                   </div>         
//                 </div>
//             </>
//           )
//         }
//       </div>

//       {/* <div className="section">
//         {
//           films && films.length > 0 && (
//             <>
//               <h3 className="section__header">FILMS</h3>
//               <DetailsList list={films} names={filmsList} />
//             </>
//           )
//         }
//       </div> */}

//       <div className="section">
//         {
//           dataIsLoading && (
//             <LoadingSpinner />
//           )
//         }
//       </div>
//     </>
//   )
// }
