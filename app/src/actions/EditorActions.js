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

function fileOpen (file) {
    return {
        type: actionTypes.EDITOR_FILE_OPEN,
        file
    };
}

function fileTreeElemSelect (elem) {
    return {
        type: actionTypes.EDITOR_FILE_TREE_ELEM_SELECT,
        elem
    };
}

function fileTreeToggleDirCollapse (elem) {
    return {
        type: actionTypes.EDITOR_FILE_TREE_TOGGLE_DIR_COLLAPSE,
        elem
    };
}

export {
    tabSelect,
    tabClose,
    tabChangePosition,
    fileOpen,
    fileTreeElemSelect,
    fileTreeToggleDirCollapse
};
