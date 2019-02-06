import axios from 'axios';

export default function setup() {
    axios.interceptors.request.use(function(config) {
        const user = localStorage.getItem('auth.currentUser');
        if(user !== 'null') {
            config.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
        }
        return config;
    }, function(err) {
        return Promise.reject(err);
    });
}
