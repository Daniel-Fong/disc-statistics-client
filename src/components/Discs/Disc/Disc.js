import React from 'react';
// import cx from 'classnames';
import { Link } from 'react-router-dom';
// import UserContext from '../../../contexts/UserContext';
// import Button from '../../Button/Button';
// import Confirm from '../../Confirm/Confirm';

export default class Disc extends React.Component {
    render() {
        const { disc } = this.props;
        console.log(disc)
        return (
            <li>
                <Link to={`/discs/${disc.id}`}>
                    <h3>{disc.name}</h3>
                </Link>
                <p>{disc.mold}</p>
                <p>{disc.plastic}</p>
                <p>{disc.type}</p>
                <span>{disc.speed}</span>
                <span>{disc.glide}</span>
                <span>{disc.turn}</span>
                <span>{disc.fade}</span>
            </li>
        )
    }
}