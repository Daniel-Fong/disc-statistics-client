import React, { Component } from 'react';
// import UserContext from '../../contexts/UserContext';
// import DiscApiService from '../../services/disc-api-service';
import Disc from './Disc/Disc'

export default class Discs extends Component {
    render() {
        const { discs } = this.props;
        return (
            <div>
                <ul>
                    {discs.map((disc) => (
                        <Disc
                            disc={disc}
                            key={disc.id}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}