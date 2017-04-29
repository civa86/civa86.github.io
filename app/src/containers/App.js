import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as editorAction from '../actions/EditorActions';

//Components
import SplitPane from 'react-split-pane';
import Tabs, { Tab } from '../components/Tabs';
import Code from '../components/Code';

class App extends Component {

    renderTabs () {
        const { editor } = this.props;

        return editor.tabs
                     .filter(t => t.opened)
                     .map((value, index) => {
                         return (
                             <Tab
                                 key={ index }
                                 title={ value.title }
                                 showClose={ true }
                             />
                         );
                     });
    }

    render () {
        const { dispatch, editor } = this.props;
        return (
            <SplitPane split="vertical" minSize={50} defaultSize={200}>
                <div className="sidebar cursor-default no-select">
                    <div>
                        <div className="title">
                            <i className="ion-ios-bookmarks"/> Dario Civallero
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="tab-bar">

                        <Tabs active={editor.activeTab}
                              onTabSwitch={tab => dispatch(editorAction.tabSelect(tab))}
                              onTabClose={tab => dispatch(editorAction.tabClose(tab))}
                              onTabPositionChange={(a, b) => dispatch(editorAction.tabChangePosition(a, b))}
                              draggable={true}>
                            {this.renderTabs()}
                        </Tabs>

                    </div>
                    <div className="container-fluid content-editor">
                        <div className="row">
                            <div className="col-xs-12">
                                <Code>
                                    <span>def print_hi(name)</span>
                                    <span>	puts "Hi, #{name}"</span>
                                    <span>end</span>
                                    <span></span>
                                    <span>print_hi('Tom')</span>
                                    <span>def print_hi(name)</span>
                                    <span>	puts "Hi, #{name}"</span>
                                    <span>end</span>
                                    <span></span>
                                    <span>print_hi('Tom')</span>
                                    <span>#=> prints 'Hi, Tom' to STDOUT.</span>
                                    <span>def print_hi(name)</span>
                                    <span>	puts "Hi, #{name}"</span>
                                    <span>end</span>
                                    <span></span>
                                    <span>print_hi('Tom')</span>
                                    <span>def print_hi(name)</span>
                                    <span>	puts "Hi, #{name}"</span>
                                    <span>end</span>
                                    <span></span>
                                    <span>print_hi('Tom')</span>
                                    <span>#=> prints 'Hi, Tom' to STDOUT.</span>
                                    <span>def print_hi(name)</span>
                                    <span>	puts "Hi, #{name}"</span>
                                    <span>end</span>
                                    <span></span>
                                    <span>print_hi('Tom')</span>
                                    <span>def print_hi(name)</span>
                                    <span>	puts "Hi, #{name}"</span>
                                    <span>end</span>
                                    <span></span>
                                    <span>print_hi('Tom')</span>
                                    <span>#=> prints 'Hi, Tom' to STDOUT.</span>
                                    <span>def print_hi(name)</span>
                                    <span>	puts "Hi, #{name}"</span>
                                    <span>end</span>
                                    <span></span>
                                    <span>print_hi('Tom')</span>
                                    <span>def print_hi(name)</span>
                                    <span>	puts "Hi, #{name}"</span>
                                    <span>end</span>
                                    <span></span>
                                    <span>print_hi('Tom')</span>
                                    <span>#=> prints 'Hi, Tom' to STDOUT.</span>
                                </Code>
                            </div>
                        </div>
                    </div>
                </div>
            </SplitPane>
        );
    }
}

function mapStateToProps (state) {
    return {
        editor: state.editor
    };
}

export default connect(mapStateToProps)(App);



