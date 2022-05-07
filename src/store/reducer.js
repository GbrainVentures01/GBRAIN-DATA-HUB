import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import {
    getGloDataReducer,
    getMtnDataReducer,
    getAirtelDataReducer,
    dataOrderReducer,
    airtimeOrderReducer,
    loginUserReducer,
    registerUserReducer,
    logoutReducer,
    userReducer,
    forgetPasswordReducer,
    monnifyFundingReducer
} from './netorkCallsReducers';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    myMtnDataPlans: getMtnDataReducer,
    myGloDataPlans: getGloDataReducer,
    myAirtelDataPlans: getAirtelDataReducer,
    dataOrder: dataOrderReducer,
    airtimeOrder: airtimeOrderReducer,
    login: loginUserReducer,
    logout:logoutReducer,
    register: registerUserReducer,
    loggedInUser:userReducer,
    forgetPassword:forgetPasswordReducer,
    fundWithMonnify:monnifyFundingReducer
    
});

export default reducer;
