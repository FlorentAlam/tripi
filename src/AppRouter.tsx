import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/pages/Home';

type RouteType = {
    path: string;
    component: React.FunctionComponent
}

type AppRouterProps = {
    routes: RouteType[];
};

const AppRouter = ({routes}: AppRouterProps) => (
    <Router>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}/>
            {routes.map(route => (
                <Route path={route.path} component={route.component}/>
            ))}
        </Switch>
    </Router>
);

export default AppRouter;