import config from '../config';
import TokenService from './token-service';

const CourseApiService = {
    loginToSession() {
        return fetch('https://api.pdga.com/services/json/user/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: {
                "username":"Daniel Fong","password":"iWXjpfDQt5!deE@"
            },
            withCredentials: true,
            crossorigin: true
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
    getCourses(sessionId) {
        return fetch('http://api.pdga.com/services/json/course', {
            method: 'GET',
            headers: `Cookie: session_name=${sessionId}`,
        })
    }
}

export default CourseApiService;