import * as actionTypes from '../constants/ActionTypes';
import initState from './initState';

const initialState = initState.editor;

function editor (state = initialState, action = {}) {

    switch (action.type) {

        case actionTypes.EDITOR_TAB_SELECT : {
            return {
                ...state,
                activeTab: action.tab
            };
        }

        case actionTypes.EDITOR_TAB_CLOSE : {
            return {
                ...state,
                tabs: state.tabs.map((t, i) => {
                    console.log(i, action.tab)
                    if (i !== action.tab) {
                        return t;
                    }

                    return {
                        ...t,
                        opened: false
                    };
                })
            };
        }

        case actionTypes.EDITOR_TAB_CHANGE_POSITION : {
            let tabs = [...state.tabs],
                activeTab = state.activeTab;

            [tabs[action.a], tabs[action.b]] = [tabs[action.b], tabs[action.a]];

            if (state.activeTab === action.a) {
                activeTab = action.b;
            } else if (state.activeTab === action.b) {
                activeTab = action.a;
            }

            return {
                ...state,
                activeTab,
                tabs
            };
        }

        default:
            return state;

    }
}

export default editor;
