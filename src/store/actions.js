import { makeNetworkCall } from 'network';
import {
    BUY_AIRTIME_FAIL,
    BUY_AIRTIME_REQUEST,
    BUY_AIRTIME_SUCCESS,
    BUY_DATA_FAIL,
    BUY_DATA_REQUEST,
    BUY_DATA_SUCCESS,
    GET_AIRTEL_DATA_PLAN_FAIL,
    GET_AIRTEL_DATA_PLAN_REQUEST,
    GET_AIRTEL_DATA_PLAN_SUCCESS,
    GET_GLO_DATA_PLAN_FAIL,
    GET_GLO_DATA_PLAN_REQUEST,
    GET_GLO_DATA_PLAN_SUCCESS,
    GET_MTN_DATA_PLAN_FAIL,
    GET_MTN_DATA_PLAN_REQUEST,
    GET_MTN_DATA_PLAN_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS
} from './constant';

// action - customization reducer
export const SET_MENU = '@customization/SET_MENU';
export const MENU_TOGGLE = '@customization/MENU_TOGGLE';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY';
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS';

const token = localStorage.getItem('user');

export const getGloData = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_GLO_DATA_PLAN_REQUEST
        });
        const { data } = await makeNetworkCall({
            method: 'GET',
            path: 'data-plans',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        dispatch({
            type: GET_GLO_DATA_PLAN_SUCCESS,
            payload: data.data
        });
    } catch (error) {
        dispatch({
            type: GET_GLO_DATA_PLAN_FAIL,
            payload: error?.response?.data?.responseMessage || error.message
        });
    }
};

export const getMtnData = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_MTN_DATA_PLAN_REQUEST
        });
        const { data } = await makeNetworkCall({
            method: 'GET',
            path: 'mtn-data-plans',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        dispatch({
            type: GET_MTN_DATA_PLAN_SUCCESS,
            payload: data.data
        });
    } catch (error) {
        dispatch({
            type: GET_MTN_DATA_PLAN_FAIL,
            payload: error?.response?.data?.responseMessage || error.message
        });
    }
};

export const getAirtelData = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_AIRTEL_DATA_PLAN_REQUEST
        });
        const { data } = await makeNetworkCall({
            method: 'GET',
            path: 'airtel-data-plans',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        dispatch({
            type: GET_AIRTEL_DATA_PLAN_SUCCESS,
            payload: data.data
        });
    } catch (error) {
        dispatch({
            type: GET_AIRTEL_DATA_PLAN_FAIL,
            payload: error?.response?.data?.responseMessage || error.message
        });
    }
};

export const LoginAction =
    ({ user }) =>
    async (dispatch) => {
        try {
            dispatch({
                type: LOGIN_USER_REQUEST
            });
            const { data } = await makeNetworkCall({
                method: 'POST',
                requestBody: user,
                path: 'auth/local'
            });
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: data
            });
            console.log(data);
        } catch (error) {
            dispatch({
                type: LOGIN_USER_FAIL,
                payload: error?.response?.data?.responseMessage || error.message
            });
        }
    };

export const registerAction =
    ({ user }) =>
    async (dispatch) => {
        try {
            dispatch({
                type: REGISTER_USER_REQUEST
            });
            const { data } = await makeNetworkCall({
                method: 'POST',
                requestBody: user,
                path: 'auth/local/register'
            });
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: data
            });
            console.log(data);
        } catch (error) {
            dispatch({
                type: REGISTER_USER_FAIL,
                payload: error?.response?.data?.responseMessage || error.message
            });
        }
    };

export const buyAirtime =
    ({ orderDetails }) =>
    async (dispatch) => {
        try {
            dispatch({
                type: BUY_AIRTIME_REQUEST
            });
            const { data } = await makeNetworkCall({
                method: 'POST',
                path: 'airtime-orders',
                requestBody: orderDetails,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch({
                type: BUY_AIRTIME_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: BUY_AIRTIME_FAIL,
                payload: error?.response?.data?.responseMessage || error.message
            });
        }
    };

export const buyData =
    ({ orderDetails }) =>
    async (dispatch) => {
        try {
            dispatch({
                type: BUY_DATA_REQUEST
            });
            const { data } = await makeNetworkCall({
                method: 'POST',
                path: 'data-orders',
                requestBody: orderDetails,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(data);
            dispatch({
                type: BUY_DATA_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: BUY_DATA_FAIL,
                payload: error?.response?.data?.responseMessage || error.message
            });
        }
    };
