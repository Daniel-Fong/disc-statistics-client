import config from '../config';

const DiscApiService = {
    addDisc(disc) {
        return fetch(`${config.API_ENDPOINT}/discs`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: {

            }
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
    }
}

export default DiscApiService;