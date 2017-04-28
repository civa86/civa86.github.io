import * as actionTypes from '../constants/ActionTypes';

function loadServerList (list) {
    return {
        type: actionTypes.SERVER_LOAD_LIST,
        list
    }
}

export {
    loadServerList
};
