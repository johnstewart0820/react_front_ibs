import axios from 'axios';
import authHeader from './auth-header';
import storage from '../utils/storage';
class Job {
    getInfo = () => {
        return axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/job/info`, {
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

    getChartData = (id_chart_type, id_section, id_occupation, id_province, id_cluster, fromDate, toDate) => {
        return axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/job/get_chart_data`, {
            id_chart_type: id_chart_type,
            id_section: id_section,
            id_occupation: id_occupation,
            id_province: id_province,
            id_cluster: id_cluster,
            fromDate: fromDate,
            toDate: toDate,
            fromDateStr: new Date(fromDate.year, fromDate.month, 1, 0, 0, 0),
            toDateStr: new Date(toDate.year, toDate.month + 1, 0, 0, 0, 0),
            fromYearStr: new Date(fromDate.year, 0, 1, 0, 0, 0, 0),
            toYearStr: new Date(parseInt(fromDate.year) + 1, 1, 0, 0, 0, 0)
        }, {
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
export default new Job();