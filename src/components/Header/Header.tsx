import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <header>
        <h1>Tripi.</h1>
        <div>
            <Link to="/connexion">Connexion</Link>
            <Link to="/inscription">Inscription</Link>
        </div>
    </header>
);

export default Header;