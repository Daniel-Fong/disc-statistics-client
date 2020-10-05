import React, { Component } from 'react';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <label for='course-search'>Search Courses</label>
                <input class='course-search' name='course-search'>
                </input>
            </div>
        )
    }
}