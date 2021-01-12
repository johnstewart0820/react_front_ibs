import axios from 'axios';
import authHeader from './auth-header';
import storage from '../utils/storage';
class series_labels {
    getSeriesLabels = () => {
        return axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/series_label`, {
                headers: authHeader(storage.getStorage('token'))
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
export default new series_labels();