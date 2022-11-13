import { combineReducers } from 'redux';
// reducer import
import customizationReducer from './customizationReducer';
import {
    airtimeOrderReducer,
    dataGiftingOrderReducer,
    dataOrderReducer,
    electricityPurchase,
    examPinPurchase,
    forgetPasswordReducer,
    forgetPinReducer,
    getAirtelDataReducer,
    getBtcDetailsReducer,
    getelectricityProvidersReducer,
    getGloDataReducer,
    getHistoriesReducer,
    getMtnDataReducer,
    getMtnSmeDataReducer,
    getSellAirtimeDetailsReducer,
    getVariationsReducer,
    loginUserReducer,
    logoutReducer,
    monnifyFundingReducer,
    registerUserReducer,
    resetPasswordReducer,
    sellAirtimeReducer,
    tvCablesPurchase,
    userReducer,
    userUpdateReducer,
    verifyDetailsReducers,
    verifyMeterReducers
} from './netorkCallsReducers';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    myMtnDataPlans: getMtnDataReducer,
    myMtnSmeDataPlans: getMtnSmeDataReducer,
    myGloDataPlans: getGloDataReducer,
    myAirtelDataPlans: getAirtelDataReducer,
    dataOrder: dataOrderReducer,
    dataGiftingOrder: dataGiftingOrderReducer,
    airtimeOrder: airtimeOrderReducer,
    sellAirtimeOrder: sellAirtimeReducer,
    login: loginUserReducer,
    logout: logoutReducer,
    register: registerUserReducer,
    loggedInUser: userReducer,
    updateUser: userUpdateReducer,
    forgetPassword: forgetPasswordReducer,
    forgetPin: forgetPinReducer,
    resetPassword: resetPasswordReducer,
    fundWithMonnify: monnifyFundingReducer,
    vtuVariations: getVariationsReducer,
    electricityProviders: getelectricityProvidersReducer,
    tvCablesOrder: tvCablesPurchase,
    electricityOrder: electricityPurchase,
    examPinOrder: examPinPurchase,
    transactionHistory: getHistoriesReducer,
    sellAirtimeDetails: getSellAirtimeDetailsReducer,
    sellBtcDetails: getBtcDetailsReducer,
    verifyDetailsData: verifyDetailsReducers,
    verifyMeterData: verifyMeterReducers
});

export default reducer;
