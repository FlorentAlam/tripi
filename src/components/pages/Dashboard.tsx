import React from 'react';
import Page from './Page';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

type DashboardProps = {
    isLogged: boolean
}

const Dashboard = ({isLogged}: DashboardProps) => (
    <Page pageTitle="Tripi - Tableau de bord">
        <div>
            {!isLogged && <Redirect to="/"/>}
        </div>
    </Page>
);

const mapStateToProps = (state: any) => ({
    isLogged: state.user.isLogged
});

export default connect(mapStateToProps)(Dashboard);