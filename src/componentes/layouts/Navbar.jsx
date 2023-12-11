import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import './Navbar.css';

const Navbar = () => {
  //Controla se o menu está aberto ou fechado
    const [menuOpen, setMenuOpen] = useState(false);
  //Obtém onde o usuário está na página
    const location = useLocation();

  //Função que lida com o abrir e o fechar do menu
    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='navbar'>
            <Header />
            <hr/>
            <div className='menu-icon' onClick={handleMenu}>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            </div>
            <ul className={`navegation ${menuOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={handleMenu}>HOME
                {location.pathname === "/" && <div className="lightsaber lightsaber-home"></div>}
                </Link></li>
                <li><Link to="/starships" onClick={handleMenu}>NAVES
                {location.pathname === "/starships" && <div className="lightsaber lightsaber-starships"></div>}
                </Link></li>
                <li><Link to="/actors" onClick={handleMenu}>PERSONAGENS
                {location.pathname === "/actors" && <div className="lightsaber lightsaber-actors"></div>}
                </Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
