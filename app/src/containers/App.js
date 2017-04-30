import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as appAction from '../actions/AppActions';
import * as editorAction from '../actions/EditorActions';

//Components
import SplitPane from 'react-split-pane';
import SideBar from '../components/SideBar';
import Tabs, { Tab } from '../components/Tabs';
import Reload from '../components/Reload';
import Code from '../components/Code';

class App extends Component {

    getOpenedTabs () {
        const { editor } = this.props;
        return editor.tabs;
    }

    renderTabs () {
        return this.getOpenedTabs().map((value, index) => {
            return (
                <Tab
                    key={index}
                    title={value.title}
                    showClose={true}
                />
            );
        });
    }

    buildEmptyClass (inputClass) {
        return (this.getOpenedTabs().length === 0) ? inputClass + ' empty' : inputClass;
    }

    render () {
        const { dispatch, editor } = this.props;
        return (
            <SplitPane split="vertical" minSize={105} defaultSize={205}>
                <SideBar/>
                <div className="content">
                    <div className={this.buildEmptyClass('tab-bar')}>
                        <Tabs active={editor.activeTab}
                              onTabSwitch={tab => dispatch(editorAction.tabSelect(tab))}
                              onTabClose={tab => dispatch(editorAction.tabClose(tab))}
                              onTabPositionChange={(a, b) => dispatch(editorAction.tabChangePosition(a, b))}
                              draggable={true}>
                            {this.renderTabs()}
                        </Tabs>
                    </div>
                    <div className={this.buildEmptyClass('container-fluid content-editor')}>
                        <div className="row">
                            <div className="col-xs-12">
                                {
                                    this.getOpenedTabs().length === 0 &&
                                    <Reload onReload={() => dispatch(appAction.reload())}/>
                                }
                                {
                                    this.getOpenedTabs().length > 0 &&
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
                                }
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
