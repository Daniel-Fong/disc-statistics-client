import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import Header from '../../components/Header/Header'

export class DashboardRoute extends Component {

    state = {
        
    };

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Header/>
                <Dashboard />
            </div>
        );
    }
} 

export default DashboardRoute;