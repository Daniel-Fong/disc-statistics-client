import React, { Component } from 'react';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <label for='location-search'>Search Resorts and Locations</label>
                <input class='location-search' name='location-search'>
                </input>
            </div>
        )
    }
}