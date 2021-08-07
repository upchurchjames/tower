import Axios from 'axios'

let instance = null;

class API {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.request = Axios.create({
            baseUrl: 'http://localhost:8000',
        });

        return instance;
    }

    setToken = (accessToken) => {
        this.request.defaults.headers.common.authorization = `Bearer ${accessToken}`;
    }

    authenticateUser = () => this.request.get()
    
}