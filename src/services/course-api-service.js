import config from '../config';
import TokenService from './token-service';

const CourseApiService = {
    loginToSession() {
        return fetch(`${config.API_ENDPOINT}/pdga/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },

    logoutOfSession() {
        return fetch(`${config.API_ENDPOINT}/pdga/logout`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
        }).then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        ); 
    },

    getCourses(sessionId) {
        return fetch(`${config.proxyUrl}http://api.pdga.com/services/json/course?postal_code=90815`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
                // 'Cookie': 'session_name=VLpw3rV8nCrYWPDc_pwA2WZPSKZI5tltJwsV_40t0fg'
            },
        }).then((res) => 
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    }
}

export default CourseApiService;