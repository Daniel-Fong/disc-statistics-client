import config from '../config';
import TokenService from '../services/token-service';

const CourseApiService = {
    addCourse(course) {
        return fetch(`${config.API_ENDPOINT}/courses`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                course,
            }),
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },

    getCourses() {
        return fetch(`${config.API_ENDPOINT}/courses`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },
}

export default CourseApiService;