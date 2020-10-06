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
            }
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
    getCourses() {
        return fetch()
    }
}

export default CourseApiService;