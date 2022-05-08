import { combineReducers } from 'redux';
// reducer import
import customizationReducer from './customizationReducer';
import {
    airtimeOrderReducer, dataOrderReducer, forgetPasswordReducer, getAirtelDataReducer, getGloDataReducer,
    getMtnDataReducer, loginUserReducer, logoutReducer, monnifyFundingReducer, registerUserReducer, userReducer
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
