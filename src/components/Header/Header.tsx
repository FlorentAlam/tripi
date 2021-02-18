import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <header>
        <h1>tripi.</h1>
        <div>
            <Link to="/connexion">Connexion</Link>
            <Link to="/inscription">Inscription</Link>
            <Link to="/tableau-de-bord">Tableau de bord</Link>
        </div>
    </header>
);

export default Header;