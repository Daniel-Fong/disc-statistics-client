import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import CourseApiService from '../../services/course-api-service';

export class DashboardRoute extends Component {

    state = {
        sessionId: ''
    };

    componentDidMount() {
        this.startSession();
    }

    async startSession() {
        const response = await CourseApiService.loginToSession();
        console.log(response);
    }

    render() {
        return (
            <div>
                <Dashboard />
            </div>
        );
    }
} 

export default DashboardRoute;