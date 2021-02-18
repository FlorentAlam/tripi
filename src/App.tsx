import React from 'react';
import AppRouter from './AppRouter';
import Connexion from './components/pages/Connexion';

const App = () => (
  <>
    <AppRouter routes={
      [
        {path: '/connexion', component: Connexion}
      ]
    }/>
  </>
);

export default App;
