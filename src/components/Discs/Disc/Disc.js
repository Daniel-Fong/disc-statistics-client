import React from 'react';
// import cx from 'classnames';
// import { Link } from 'react-router-dom';
// import UserContext from '../../../contexts/UserContext';
// import Button from '../../Button/Button';
// import Confirm from '../../Confirm/Confirm';

export default class Disc extends React.Component {
    render() {
        const { disc } = this.props;
        console.log(disc)
        return (
            <li>
                <span>{disc.name}</span>
                <span>{disc.speed}</span>
            </li>
        )
    }
}