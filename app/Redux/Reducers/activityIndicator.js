import _ from 'lodash';
import { consoleLog } from 'utils/console';

const initialState = {
    show: false,
    text: "",
    lshow: false,
};
const activityIndicator = (state = initialState, action) => {
    // consoleLog("ji", action.type);
    switch (action.type) {
        case 'SHOW_ACTIVITY_INDICATOR':
            return { show: true, text: action.text };
        case 'HIDE_ACTIVITY_INDICATOR':
            return { show: false, text: '' };
        default:
            return state;
    }
};

export default activityIndicator;