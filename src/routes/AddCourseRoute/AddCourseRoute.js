import React, { Component } from 'react';
import AddCourseForm from '../../components/AddCourseForm/AddCourseForm';
import Header from '../../components/Header/Header';
import UserContext from '../../contexts/UserContext'

export class AddCourseRoute extends Component {

    static contextType = UserContext;

    state = {
        
    };

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Header/>
                <AddCourseForm user={this.props.user}/>
            </div>
        );
    }
} 

export default AddCourseRoute;