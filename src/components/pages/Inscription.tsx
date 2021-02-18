import React, { useState } from 'react';

const Inscription = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordR, setPasswordR] = useState('');

    const subscribe = (e: React.MouseEvent) => {
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
            <label htmlFor="passwordR">Répétez votre mot de passe</label>
            
            <input type="passwordR" name="passwordR" id="passwordR" autoComplete="password" value={passwordR} onChange={(e) => {setPasswordR(e.target.value)}}/>
            <button type="submit" onClick={subscribe}>Inscription</button>
        </form>
    </div>
)};

export default Inscription;