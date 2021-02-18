import React, { useState } from 'react';

const Connexion = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe]  = useState('');

    const connect = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log("coucou");
    }

    return (
    <div>
        <h1>Connexion</h1>
        <form>
        <label htmlFor="email">Adresse email</label>
            <input type="email" name="email" id="email" autoComplete="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" id="password" autoComplete="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            <input type="checkbox" name="remember" id="remember" value={rememberMe} onChange={(e) => {setRememberMe(e.target.value)}}/>
            <label htmlFor="remember">Se souvenir de moi</label>
            <button type="submit" onClick={connect}>Connexion</button>
        </form>
    </div>
)};

export default Connexion;