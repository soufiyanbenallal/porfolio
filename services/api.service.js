import axios from 'axios';

/**
 * basic api service get
 * @param {string} url - url to get
 * @param {object} params - params to send
 * @returns {Promise<any>}
 */
export const get = (url, payload= {}) => {
    // return axios.get(process.env.NEXT_PUBLIC_ENV_API_URL + url , {
    return axios.get( url , {
        params : payload
    });
}