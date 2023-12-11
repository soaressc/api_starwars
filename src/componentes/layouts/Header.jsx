import { Link } from 'react-router-dom';
import './Header.css'
import LogoSt from '../../assets/images/logo-starwars.jpg'

// Componente do cabecário (Header) que renderiza o log in e o sign up com os links de acesso
const Header = props => (
    <header>
        <img className='logo-star-wars' src={LogoSt} alt='logo Star Wars' />
        <nav>
            <ul>
                <li><Link to="/login">LOG IN</Link></li>
                <li><Link to="/signup">SIGN UP</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header;


