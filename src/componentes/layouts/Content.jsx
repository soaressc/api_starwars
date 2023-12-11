// Importa os componentes Route e Routes do pacote 'react-router-dom'.
import { Route, Routes } from 'react-router-dom';

// Importa os componentes de visualização (views) necessários.
import Home from '../../views/pages/Home.jsx';
import Starships from '../../views/pages/Starships.jsx';
import Actors from '../../views/pages/Actors.jsx';
import Login from '../../views/pages/Login.jsx';
import Register from '../../views/pages/Register.jsx';

// Importa o estilo CSS específico para o componente Content.
import './Content.css'

// Declaração do componente funcional Content.
const Content = props => (
  <>
    {/* Cria uma barra lateral (<aside>) com a classe CSS 'Content'. */}
    <aside className='Content'>
      {/* Define as rotas para os diferentes componentes de visualização usando o componente Routes. */}
      <Routes>
         {/* Rota para a página inicial ('/') que renderiza o componente Home. */}
        <Route path='/' exact element={<Home />} />
         {/* Rota para a página de naves espaciais ('/starships') que renderiza o componente Starships. */}
        <Route path='/starships' exact element={<Starships />} />
        {/* Rota para a página de atores ('/actors') que renderiza o componente Actors. */}
        <Route path='/actors' exact element={<Actors />} />
         {/* Rota para a página de login ('/login') que renderiza o componente Login. */}
        <Route path="/login" exact element={<Login />} />
        {/* Rota para a página de registro ('/signup') que renderiza o componente Register. */}
        <Route path="/signup" exact element={<Register />} />
      </Routes>
    </aside>
  </>
)
// Exporta o componente Content como padrão.
export default Content;