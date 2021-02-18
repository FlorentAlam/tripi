import React from 'react';
import AppRouter from './AppRouter';
import Connexion from './components/pages/Connexion';
import Inscription from './components/pages/Inscription';

const App = () => (
  <>
    <AppRouter routes={
      [
        {path: '/connexion', component: Connexion},
        {path: '/inscription', component: Inscription}
      ]
    }/>
  </>
);

export default App;
