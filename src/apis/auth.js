import axios from 'axios';
import authHeader from './auth-header';
import storage from '../utils/storage';
class Auth {
    login = (email, password) => {
        return axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
                email: email,
                password: password
            })
            .then(response => {
                if (response.code === 200) {
                    storage.setStorage('token', response.data.data.token);
                }
                return response.data;
            }).catch(error => {
                return error;
            })
    }
    register = (email, password, setAdvanced, first_name, last_name) => {
        return axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/auth/register`, {
                email: email,
                password: password,
                setAdvanced: setAdvanced,
                first_name: first_name,
                last_name: last_name
            })
            .then(response => {
                return response.data;
            }).catch(error => {
                return error;
            })
    }
    validate = (token) => {
        return axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/auth/verify`, {
            }, {headers: authHeader(token)})
            .then(response => {
                return response.data;
            }).catch(error => {
                return error;
            })
    }
    forgot = (email) => {
        return axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/auth/forgot`, {
                email: email
            })
            .then(response => {
                return response.data;
            }).catch(error => {
                return error;
            })
    }

    reset_password = (password, token) => {
        return axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/auth/reset_password`, {
                password: password
            }, {headers: authHeader(token)})
            .then(response => {
                return response.data;
            }).catch(error => {
                return error;
            })
    }

}
export default new Auth();