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
                tabs: state.tabs.filter((t, i) => i !== action.tab)
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

        case actionTypes.EDITOR_FILE_OPEN : {
            return {
                ...state,
                tabs: [
                    ...state.tabs,
                    {
                        title: action.file
                    }
                ],
                activeTab: state.tabs.length
            };
        }

        case actionTypes.APP_RELOAD : {
            return {
                ...state,
                tabs: [...state.allTabs],
                activeTab: 0
            };
        }

        default:
            return state;

    }
}

export default editor;
