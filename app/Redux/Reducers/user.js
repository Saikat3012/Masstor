/**
 * This file is a refenece of reducers.
 * for store common user information and state of user according to project/apk.
 */

import { consoleLog } from 'utils/console';
const initialState = {
    //here define states just like commnet of states.
    ReduxUser: {},
    ReduxRegisterMobile: '',//Mobile
    ReduxLocationType: 'Deny',//Alloction
    ReduxCurrentCity: '',//Alloction
    ReduxMobileSendOtp: '',//Mobile
    darkmode: 0,
    ReduxFilterSchool: [],//Home
    ReduxFilterSchooListType: '',//Home
    ReduxSelectedCity: {},
    ReduxOtpToken: '',
    ReduxSchoolCriteria: {},//School Detail criteria
    ReduxSelctedSchool: {}, //Selcted School

    ReduxSelctedStdTypeHome: '',
    ReduxSelctedBoardTypeHome: '',
    ReduxSelctedLearingModeTypeHome: '',
    ReduxSelctedSchoolTypeHome: '',
    ReduxSelctedSchoolFormatTypeHome: '',
    ReduxSelctedCOStatusTypeHome: '',
    ReduxSelctedLanguageTypeHome: '',
    ReduxSearchSchoolNameHome: 'somay',


};

const user = (state = initialState, action) => {
    consoleLog("Action Type", action.type);

    switch (action.type) {
        // case 'DARK_MODE':
        //     consoleLog("DarkMode Action", JSON.stringify(action));
        //     return { ...state, darkmode: action.data };
        case 'Register_Mobile':
            consoleLog("Register Action", JSON.stringify(action));
            return { ...state, ReduxRegisterMobile: action.data };

        case 'Loction_Type':
            return { ...state, ReduxLocationType: action.data };

        case 'Current_Location':
            return { ...state, ReduxCurrentCity: action.data };

        case 'MobileSend_Otp':
            return { ...state, ReduxMobileSendOtp: action.data };

        case 'FilterSchool':
            return { ...state, ReduxFilterSchool: action.data };

        case 'FilterSchooList_Type':
            return { ...state, ReduxFilterSchooListType: action.data };

        case 'Selected_City':
            return { ...state, ReduxSelectedCity: action.data };

        case 'Otp_Token':
            return { ...state, ReduxOtpToken: action.data };

        //Searching For Home
        case 'Selcted_StdTypeHome':
            return { ...state, ReduxSelctedStdTypeHome: action.data };
        case 'Selcted_BoardTypeHome':
            return { ...state, ReduxSelctedBoardTypeHome: action.data };
        case 'Selcted_LearingModeTypeHome':
            return { ...state, ReduxSelctedLearingModeTypeHome: action.data };
        case 'Selcted_SchoolTypeHome':
            return { ...state, ReduxSelctedSchoolTypeHome: action.data };
        case 'Selcted_COStatusTypeHome':
            return { ...state, ReduxSelctedCOStatusTypeHome: action.data };
        case 'Selcted_LanguageTypeHome':
            return { ...state, ReduxSelctedLanguageTypeHome: action.data };
        case 'Selcted_SchoolFormatTypeHome':
            return { ...state, ReduxSelctedSchoolFormatTypeHome: action.data };
        case 'Selcted_SearchSchoolNameHome':
            return { ...state, ReduxSearchSchoolNameHome: action.data };
        case 'Selcted_SchoolCriteria':
            return { ...state, ReduxSchoolCriteria: action.data };
        case 'User':
            return { ...state, ReduxUser: action.data };
        case 'Selected_School':
            return { ...state, ReduxSelctedSchool: action.data };
        default:
            return state
    }
}

export default user;
