import axios from 'axios';
import authHeader from './auth-header';
import storage from '../utils/storage';
class JobOffers {
    getInfo = () => {
        return axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/job_offer/info`, {
            headers: authHeader(storage.getStorage('token')),
        })
        .then(response => {
            if (response.data.code === 401)
                storage.removeStorage('token');
            return response.data;
        }).catch(error => {
            return error;
        })
    }
    create = (data) => {
        return axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/job_offer`, {
            data: data
        }, {
            headers: authHeader(storage.getStorage('token')),
        })
        .then(response => {
            if (response.data.code === 401)
                storage.removeStorage('token');
            return response.data;
        }).catch(error => {
            return error;
        })
    }

    delete = (from, to) => {
        return axios
        .delete(`${process.env.REACT_APP_BACKEND_URL}/job_offer`, {
            headers: authHeader(storage.getStorage('token')),
            params: {
                from: from,
                to: to
            }
        })
        .then(response => {
            if (response.data.code === 401)
                storage.removeStorage('token');
            return response.data;
        }).catch(error => {
            return error;
        })
    }
}
export default new JobOffers();