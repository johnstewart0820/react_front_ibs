import axios from 'axios';
import authHeader from './auth-header';
import storage from '../utils/storage';
class Analyze {

    createAnalyze = (name, id_chart_type, id_section, id_category, id_province, id_occupation, id_pkd, id_chart_result, id_scenario) => {
        return axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/analyze`, {
            name: name,
            id_chart_type: id_chart_type,
            id_section: id_section,
            id_category: id_category,
            id_province: id_province,
            id_occupation: id_occupation,
            id_pkd: id_pkd,
            id_chart_result: id_chart_result,
            id_scenario: id_scenario
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

    updateAnalyze = (name, id_chart_type, id_section, id_category, id_province, id_occupation, id_pkd, id_chart_result, id_scenario, id_analyze) => {
        return axios
        .put(`${process.env.REACT_APP_BACKEND_URL}/analyze`, {
            name: name,
            id_chart_type: id_chart_type,
            id_section: id_section,
            id_category: id_category,
            id_province: id_province,
            id_occupation: id_occupation,
            id_pkd: id_pkd,
            id_chart_result: id_chart_result,
            id_scenario: id_scenario,
            id_analyze: id_analyze
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
    
    getAnalyzeByOption = (sort_column, sort_order, count, page, search_key, chart_type, section, category) => {
        return axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/analyze/get_analyze_by_option`, {
            sort_column: sort_column,
            sort_order: sort_order,
            count: count,
            page: page,
            search_key: search_key,
            chart_type: chart_type,
            section: section,
            category: category
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

    delete = (id) => {
        return axios
        .delete(`${process.env.REACT_APP_BACKEND_URL}/analyze`, {
            headers: authHeader(storage.getStorage('token')),
            params: {
                id_analyze: id
            }, 
        })
        .then(response => {
            if (response.data.code === 401)
                storage.removeStorage('token');
            return response.data;
        }).catch(error => {
            return error;
        })
    }

    get = (id) => {
        return axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/analyze`, {
            headers: authHeader(storage.getStorage('token')),
            params: {
                id_analyze: id
            }, 
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
export default new Analyze();