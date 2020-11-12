import React, { Component } from 'react';
import Discs from '../../components/Discs/Discs'
import Header from '../../components/Header/Header'
import DiscsContext from '../../contexts/DiscsContext';
import DiscApiService from '../../services/disc-api-service';

export class DiscsRoute extends Component {

    static contextType = DiscsContext;

    componentDidMount() {
        this.getDiscs();
    }

    async getDiscs() {
        const discs = await DiscApiService.getUserDiscs();
        await this.context.setDiscs(discs);
    }

    render() {
        let discs = this.context.discs;
        return (
            <div>
                <Header/>
                <Discs discs={discs}/>
            </div>
        );
    }
} 

export default DiscsRoute;