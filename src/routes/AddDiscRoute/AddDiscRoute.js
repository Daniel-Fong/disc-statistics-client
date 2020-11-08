import React, { Component } from 'react';
import AddDiscForm from '../../components/AddDiscForm/AddDiscForm';
import Header from '../../components/Header/Header'

export class AddDiscRoute extends Component {

    state = {
        
    };

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Header/>
                <AddDiscForm />
            </div>
        );
    }
} 

export default AddDiscRoute;