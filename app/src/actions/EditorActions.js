import * as actionTypes from '../constants/ActionTypes';

function tabSelect (tab) {
    return {
        type: actionTypes.EDITOR_TAB_SELECT,
        tab
    };
}

function tabClose (tab) {
    return {
        type: actionTypes.EDITOR_TAB_CLOSE,
        tab
    };
}

function tabChangePosition (a, b) {
    return {
        type: actionTypes.EDITOR_TAB_CHANGE_POSITION,
        a,
        b
    };
}

export {
    tabSelect,
    tabClose,
    tabChangePosition
};
