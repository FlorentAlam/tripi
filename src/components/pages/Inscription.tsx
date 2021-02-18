import React, { useState } from 'react';
import Page from './Page';

const Inscription = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setpasswordRepeat] = useState('');
    const [error, setError] = useState('');

    const subscribe = (e: React.MouseEvent) => {
        e.preventDefault();
        try{
            if(!checkInputsLength()) throw new Error('Tout les champs doivent être remplis.');
            if(!checkPasswordLength()) throw new Error('Votre mot de passe doit comporter au moins 6 caractères.');
            if(!checkPasswordMatch()) throw new Error('Les mots de passe doivent correspondre.');
            setError('');
        } catch (e){
            setError(e.message);
        }
    }

    const checkInputsLength = () => {
        return email.length && password.length && passwordRepeat.length;
    }

    const checkPasswordLength = () => {
        return password.length >= 6;
    }

    const checkPasswordMatch = () => {
        return password === passwordRepeat;
    }

    return (
    <Page pageTitle="Tripi - Inscription">
        <div>
            <h1>Inscription</h1>
            <form>
                <label htmlFor="email">Adresse email</label>
                <input type="email" name="email" id="email" autoComplete="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" autoComplete="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                
                <label htmlFor="passwordRepeat">Répétez votre mot de passe</label>
                <input type="password" name="passwordRepeat" id="passwordRepeat" autoComplete="password" value={passwordRepeat} onChange={(e) => {setpasswordRepeat(e.target.value)}}/>
                
                <button type="submit" onClick={subscribe}>Inscription</button>
            </form>
            {!!error && error}
        </div>
    </Page>
)};

export default Inscription;