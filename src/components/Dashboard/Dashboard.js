import React, { Component } from 'react';
import Header from '../Header/Header'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header/>
                <label htmlFor='course-search'>Search Courses</label>
                <input className='course-search' name='course-search'></input>
            </div>
        )
    }
}