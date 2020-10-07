import React, { Component } from 'react';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <label htmlFor='course-search'>Search Courses</label>
                <input className='course-search' name='course-search'></input>
            </div>
        )
    }
}