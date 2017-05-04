import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as appAction from '../actions/AppActions';
import * as editorAction from '../actions/EditorActions';

//Components
import Footer from '../components/Footer';
import SplitPane from 'react-split-pane';
import SideBar from '../components/SideBar';
import Editor from '../components/Editor';

class App extends Component {

    renderEditor () {
        const { dispatch, editor } = this.props;
        return (
            <Editor tabs={editor.tabs}
                    icons={editor.tabIcons}
                    activeTab={editor.activeTab}
                    onReload={() => dispatch(appAction.reload())}
                    onTabSwitch={tab => dispatch(editorAction.tabSelect(tab))}
                    onTabClose={tab => dispatch(editorAction.tabClose(tab))}
                    onTabPositionChange={(a, b) => dispatch(editorAction.tabChangePosition(a, b))}
            />
        );
    }

    render () {
        const { dispatch, editor } = this.props;

        return (
            <div>
                <div className="panels hidden-xs">
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
                        {this.renderEditor()}
                    </SplitPane>
                </div>
                <div className="panels visible-xs">
                    {this.renderEditor()}
                </div>
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        editor: state.editor
    };
}

export default connect(mapStateToProps)(App);

