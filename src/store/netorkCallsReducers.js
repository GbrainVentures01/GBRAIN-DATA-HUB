import Cookies from "js-cookie"
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

    LOGOUT_USER_FAIL,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
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
    REGISTER_USER_FAIL,
    GET_LOGGED_IN_USER_REQUEST,
    GET_LOGGED_IN_USER_SUCCESS,
    GET_LOGGED_IN_USER_FAIL,
    FORGET_PASSWORD_REQUEST,
    FORGET_PASSWORD_SUCCESS,
    FORGET_PASSWORD_FAIL,
    FUND_WALLET_BY_MONNIFY_REQUEST,
    FUND_WALLET_BY_MONNIFY_SUCCESS,
    FUND_WALLET_BY_MONNIFY_FAIL
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

export const initialLoginState = {
    loading:false,
    error:null,
    user:{}
}

export const initialLogoutState = {
    loading:false,
    error:null,
    user:{}
}

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
export const initialFundingState = {
    paymentStatus: {},
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

export const loginUserReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return { ...state, loading: true };

        case LOGIN_USER_SUCCESS: {
            Cookies.set("user", action?.payload?.jwt, {expires:1})
            Cookies.set("user_id", action?.payload?.user?.id, {expires:1})
           
            window.location.replace("/")
            return { ...state, loading: false, user: action.payload.user };
        }
        case LOGIN_USER_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

//get a user details reducers

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case GET_LOGGED_IN_USER_REQUEST:
            return { ...state, loading: true };

        case GET_LOGGED_IN_USER_SUCCESS: {
           
            return { ...state, loading: false, user: action.payload };
        }
        case GET_LOGGED_IN_USER_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

//logout user reducers starts her
export const logoutReducer = (state=initialLogoutState, action)=>{
    switch (action.type) {
        case LOGOUT_USER_REQUEST:
            return {...state, loading:true};

             case LOGOUT_USER_SUCCESS:
                Cookies.remove("user")
                Cookies.remove("user_id")
                 window.location.replace('/pages/login/login3');
                 
            return {...state, loading:false, user:action.payload};

             case LOGOUT_USER_FAIL:
            return {...state, loading:false, error:action.payload};
            
         
    
        default:
           return state;
    }
}

//FORGET PASSWORD REDUCER
export const forgetPasswordReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case FORGET_PASSWORD_REQUEST:
            return { ...state, loading: true };

        case FORGET_PASSWORD_SUCCESS: {
            
            return { ...state, loading: false };
        }
        case FORGET_PASSWORD_FAIL:
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
              Cookies.set("user", action?.payload?.jwt, {expires:1})
            Cookies.set("user_id", action?.payload?.user?.id, {expires:1})
         
            window.location.replace("/")
         
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

export const monnifyFundingReducer = (state = initialFundingState, action) => {
    switch (action.type) {
        case FUND_WALLET_BY_MONNIFY_REQUEST:
            return { ...state, loading: true };

        case FUND_WALLET_BY_MONNIFY_SUCCESS:
            window.open(action.payload.checkoutUrl, '_blank')
            return { ...state, loading: false, paymentStatus: action.payload };
        case FUND_WALLET_BY_MONNIFY_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

