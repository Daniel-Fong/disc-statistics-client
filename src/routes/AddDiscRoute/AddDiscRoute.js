import React, { Component } from 'react';
import AddDiscForm from '../../components/AddDiscForm/AddDiscForm';
import Header from '../../components/Header/Header';
import UserContext from '../../contexts/UserContext'

export class AddDiscRoute extends Component {

    static contextType = UserContext;

    state = {
        
    };

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Header/>
                <AddDiscForm user={this.props.user}/>
            </div>
        );
    }
} 

export default AddDiscRoute;