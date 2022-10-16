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
    getAirtelDataReducer,
    getBtcDetailsReducer,
    getelectricityProvidersReducer,
    getGloDataReducer,
    getHistoriesReducer,
    getMtnDataReducer,
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
    verifyDetailsReducers
} from './netorkCallsReducers';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    myMtnDataPlans: getMtnDataReducer,
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
    verifyDetailsData: verifyDetailsReducers
});

export default reducer;
