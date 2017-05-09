import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as appAction from '../actions/AppActions';
import * as editorAction from '../actions/EditorActions';

//Components
import Footer from '../components/Footer';
import SplitPane from 'react-split-pane';
import SideBar from '../components/SideBar';
import Editor from '../components/Editor';

const getItemTypeByName = (collection, name) => {
    return collection.reduce((res, e) => {
        if (e.name === name) {
            res = e.type;
        } else if (e.dir && e.children.length > 0) {
            res = getItemTypeByName(e.children, name);
        }
        return res;
    }, null);
};

class App extends Component {

    getSelectedFileType () {
        const { editor } = this.props;
        return getItemTypeByName(editor.fileTree.items, editor.fileTree.selected);
    }

    render () {
        const { dispatch, editor } = this.props;

        return (
            <div>
                <div className="panels">
                    <SplitPane split="vertical" minSize={250} defaultSize={250}>
                        <SideBar fileTree={editor.fileTree.items}
                                 fileTreeSelected={editor.fileTree.selected}
                                 onSelectElem={(elem, dir) => {
                                     dispatch(editorAction.fileTreeElemSelect(elem));
                                     if (dir === true) {
                                         dispatch(editorAction.fileTreeToggleDirCollapse(elem));
                                     }
                                 }}
                                 onOpenFile={file => dispatch(editorAction.fileOpen(file))}
                        />
                        <Editor tabs={editor.tabs}
                                icons={editor.tabIcons}
                                activeTab={editor.activeTab}
                                onReload={() => dispatch(appAction.reload())}
                                onTabSwitch={tab => dispatch(editorAction.tabSelect(tab))}
                                onTabClose={tab => dispatch(editorAction.tabClose(tab))}
                                onTabPositionChange={(a, b) => dispatch(editorAction.tabChangePosition(a, b))}
                        />
                    </SplitPane>
                </div>
                <Footer currentFile={editor.fileTree.selected}
                        currentFileType={this.getSelectedFileType()}/>
            </div>
        );
    }
}

App.propTypes = {
    editor: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps (state) {
    return {
        editor: state.editor
    };
}

export default connect(mapStateToProps)(App);

