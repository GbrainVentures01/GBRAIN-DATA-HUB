import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import {
    getGloDataReducer,
    getMtnDataReducer,
    getAirtelDataReducer,
    dataOrderReducer,
    loginUserReducer,
    registerUserReducer
} from './netorkCallsReducers';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    myMtnDataPlans: getMtnDataReducer,
    myGloDataPlans: getGloDataReducer,
    myAirtelDataPlans: getAirtelDataReducer,
    dataOrder: dataOrderReducer,
    login: loginUserReducer,
    register: registerUserReducer
});

export default reducer;
