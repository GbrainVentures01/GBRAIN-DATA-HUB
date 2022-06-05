import { combineReducers } from 'redux';
// reducer import
import customizationReducer from './customizationReducer';
import {
    airtimeOrderReducer,
    dataOrderReducer,
    electricityPurchase,
    examPinPurchase,
    forgetPasswordReducer,
    getAirtelDataReducer,
    getelectricityProvidersReducer,
    getGloDataReducer,
    getMtnDataReducer,
    getVariationsReducer,
    loginUserReducer,
    logoutReducer,
    monnifyFundingReducer,
    registerUserReducer,
    tvCablesPurchase,
    userReducer
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
    logout: logoutReducer,
    register: registerUserReducer,
    loggedInUser: userReducer,
    forgetPassword: forgetPasswordReducer,
    fundWithMonnify: monnifyFundingReducer,
    vtuVariations: getVariationsReducer,
    electricityProviders: getelectricityProvidersReducer,
    tvCablesOrder: tvCablesPurchase,
    electricityOrder: electricityPurchase,
    examPinOrder: examPinPurchase
});

export default reducer;
