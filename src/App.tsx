import React from 'react';
import AppRouter from './AppRouter';
import Connexion from './components/pages/Connexion';
import Dashboard from './components/pages/Dashboard';
import Inscription from './components/pages/Inscription';

const App = () => (
  <>
    <AppRouter routes={
      [
        {path: '/connexion', component: Connexion},
        {path: '/inscription', component: Inscription},
        {path: '/tableau-de-bord', component: Dashboard}
      ]
    }/>
  </>
);

export default App;
