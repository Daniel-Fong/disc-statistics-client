import React, { Component } from 'react';
import Discs from '../../components/Discs/Discs'
import Header from '../../components/Header/Header'

export class DiscsRoute extends Component {

    state = {
        
    };

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Header/>
                <Discs />
            </div>
        );
    }
} 

export default DiscsRoute;