import config from '../config';
import TokenService from '../services/token-service';

const DiscApiService = {
    addDisc(disc) {
        return fetch(`${config.API_ENDPOINT}/discs`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                disc,
            }),
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    },

    getUserDiscs() {
        return fetch(`${config.API_ENDPOINT}/discs`, {
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

export default DiscApiService;