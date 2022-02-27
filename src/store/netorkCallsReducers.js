import {
    GET_GLO_DATA_PLAN_FAIL,
    GET_GLO_DATA_PLAN_REQUEST,
    GET_GLO_DATA_PLAN_SUCCESS,
    GET_MTN_DATA_PLAN_FAIL,
    GET_MTN_DATA_PLAN_REQUEST,
    GET_MTN_DATA_PLAN_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    BUY_AIRTIME_REQUEST,
    BUY_AIRTIME_SUCCESS,
    BUY_AIRTIME_FAIL,
    BUY_DATA_REQUEST,
    BUY_DATA_SUCCESS,
    BUY_DATA_FAIL,
    GET_AIRTEL_DATA_PLAN_REQUEST,
    GET_AIRTEL_DATA_PLAN_SUCCESS,
    GET_AIRTEL_DATA_PLAN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL
} from './constant';

export const initialGloDataState = {
    gloDataPlans: [],
    loading: false,
    error: null
};

export const initialMtnDataState = {
    mtnDataPlans: [],
    loading: false,
    error: null
};

export const initialAirtelDataState = {
    airtelDataPlans: [],
    loading: false,
    error: null
};

export const initialUserState = {
    loading: false,
    error: null,
    user: {}
};

export const initialAirtimeOrderState = {
    airtime: {},
    loading: false,
    error: null
};
export const initialDataOrderState = {
    dataStatus: {},
    loading: false,
    error: null
};
// get data plans reducers starts here

export const getGloDataReducer = (state = initialGloDataState, action) => {
    switch (action.type) {
        case GET_GLO_DATA_PLAN_REQUEST:
            return { ...state, loading: true };

        case GET_GLO_DATA_PLAN_SUCCESS:
            return { ...state, loading: false, gloDataPlans: action.payload };
        case GET_GLO_DATA_PLAN_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const getMtnDataReducer = (state = initialMtnDataState, action) => {
    switch (action.type) {
        case GET_MTN_DATA_PLAN_REQUEST:
            return { ...state, loading: true };

        case GET_MTN_DATA_PLAN_SUCCESS:
            return { ...state, loading: false, mtnDataPlans: action.payload };
        case GET_MTN_DATA_PLAN_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const getAirtelDataReducer = (state = initialAirtelDataState, action) => {
    switch (action.type) {
        case GET_AIRTEL_DATA_PLAN_REQUEST:
            return { ...state, loading: true };

        case GET_AIRTEL_DATA_PLAN_SUCCESS:
            return { ...state, loading: false, airtelDataPlans: action.payload };
        case GET_AIRTEL_DATA_PLAN_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

// login user reducer starts here

export const loginUserReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return { ...state, loading: true };

        case LOGIN_USER_SUCCESS: {
            localStorage.setItem('user', action.payload.jwt);
            window.location.replace('/');
            return { ...state, loading: false, user: action.payload.user };
        }
        case LOGIN_USER_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

// Register user reducers

export const registerUserReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return { ...state, loading: true };

        case REGISTER_USER_SUCCESS: {
            localStorage.setItem('user', action.payload.jwt);
            window.location.replace('/');
            return { ...state, loading: false, user: action.payload.user };
        }
        case REGISTER_USER_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

// airtime order reducers

export const airtimeOrderReducer = (state = initialAirtimeOrderState, action) => {
    switch (action.type) {
        case BUY_AIRTIME_REQUEST:
            return { ...state, loading: true };

        case BUY_AIRTIME_SUCCESS:
            return { ...state, loading: false, airtime: action.payload };
        case BUY_AIRTIME_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

// Data order reducers
export const dataOrderReducer = (state = initialDataOrderState, action) => {
    switch (action.type) {
        case BUY_DATA_REQUEST:
            return { ...state, loading: true };

        case BUY_DATA_SUCCESS:
            return { ...state, loading: false, dataStatus: action.payload };
        case BUY_DATA_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
