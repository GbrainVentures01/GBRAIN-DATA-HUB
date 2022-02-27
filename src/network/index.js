import axios from 'axios';
// import Cookies from 'js-cookie';
const testUrl = 'http://localhost:1337/api/';
const liveUrl = '';

// const baseUrl = `${testUrl}/api`;

export const RequestMethod = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
};

/* @description the function below is used to make network request to external server...... It
 * can easily be passed around
 *
 */

export const makeNetworkCall = async ({ method, path, requestBody, params, headers }) => {
    if (!method || !path) {
        throw new Error('A required parameter is missing. Please provide method or path');
    }

    const config = {
        method,
        url: `${testUrl}${path}`,
        params: params,
        headers: headers,
        data: requestBody
    };
    const response = await axios(config);
    return response;
};
