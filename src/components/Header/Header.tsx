import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';

type HeaderProps = {
    isLogged: boolean
}

const Header = ({isLogged}: HeaderProps) => (
    <header>
        <Link to="/"><h1>tripi.</h1></Link>
        <div>
            {!isLogged && (
                <>
                    <Link to="/connexion" className="connexion-link">Connexion</Link>
                    <Link to="/inscription">Inscription</Link>
                </>
            )}
            {isLogged && <Link to="/tableau-de-bord">Tableau de bord</Link>}
            
        </div>
    </header>
);

const mapStateToProps = (state: any) => ({
    isLogged: state.user.isLogged
});

export default connect(mapStateToProps)(Header);