import * as actionTypes from '../constants/ActionTypes';
import initState from './initState';

const initialState = initState.editor;

function editor (state = initialState, action = {}) {

    switch (action.type) {

        case actionTypes.EDITOR_TAB_SELECT : {
            const selectFileTreeElemByTab = (tree, parentTree, tab) => {
                const selectedTab = state.tabs[tab];

                return tree.reduce((res, e) => {
                    if (e.name === selectedTab) {
                        if (parentTree && parentTree.dir && parentTree.collapsed) {
                            res = parentTree.name;
                        } else {
                            res = selectedTab;
                        }
                    } else if (e.dir && e.children.length > 0) {
                        res = selectFileTreeElemByTab(e.children, e, tab);
                    }
                    return res;
                }, null);
            };

            return {
                ...state,
                activeTab: action.tab,
                fileTree: {
                    ...state.fileTree,
                    selected: selectFileTreeElemByTab(state.fileTree.items, null, action.tab)
                }
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
            const toOpen = state.tabs.map(t => t).indexOf(action.file);

            return {
                ...state,
                tabs: (toOpen !== -1) ? state.tabs : [...state.tabs, action.file],
                activeTab: (toOpen !== -1) ? toOpen : state.tabs.length
            };
        }

        case actionTypes.EDITOR_FILE_TREE_ELEM_SELECT : {
            return {
                ...state,
                fileTree: {
                    ...state.fileTree,
                    selected: action.elem
                }
            };
        }

        case actionTypes.EDITOR_FILE_TREE_TOGGLE_DIR_COLLAPSE : {
            const toggleCollapse = (tree, elem) => {
                return tree.map(e => {
                    if (e.dir !== true) {
                        return e;
                    }

                    if (e.name === elem) {
                        return {
                            ...e,
                            collapsed: !e.collapsed
                        };
                    } else {
                        return {
                            ...e,
                            children: toggleCollapse(e.children, elem)
                        };
                    }
                });
            };

            return {
                ...state,
                fileTree: {
                    ...state.fileTree,
                    items: toggleCollapse(state.fileTree.items, action.elem)
                }
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
