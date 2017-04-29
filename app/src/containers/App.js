import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import SplitPane from 'react-split-pane';
import Tabs, { Tab } from '../components/Tabs';
import Code from '../components/Code';

class App extends Component {
    tabs = [];

    handleTabSwitch(active) {
        this.setState({ activeTab: active });
    }

    handleTabPositionChange(a, b) {
        let c = this.tabs[a];
        this.tabs[a] = this.tabs[b];
        this.tabs[b] = c;

        if(this.state.activeTab == a) {
            this.setState({ activeTab: b });
        }else if(this.state.activeTab == b) {
            this.setState({ activeTab: a });
        }

        this.forceUpdate()
    }

    handleTabClose(index) {
        this.tabs.splice(index, 1);

        if(this.state.activeTab >= this.tabs.length) {
            this.setState({ activeTab: this.tabs.length - 1 });
        }

        this.forceUpdate();
    }

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };

        this.tabs = [
            {
                title: 'Tab1'
            },
            {
                title: 'Tab2'
            },
            {

                title: 'Tab3'
            }
        ];
    }

    render () {
        return (
            <SplitPane split="vertical" minSize={50} defaultSize={200}>
                <div className="sidebar">
                    <div>
                        asd
                    </div>
                </div>
                <div className="content">
                    <div className="tab-bar">

                        <Tabs active={ this.state.activeTab }
                              onTabSwitch={ this.handleTabSwitch.bind(this) }
                              onTabPositionChange={ this.handleTabPositionChange.bind(this) }
                              onTabClose={ this.handleTabClose.bind(this) }
                              draggable={ true }
                        >
                            {
                                this.tabs.map((value, index) => {
                                    return (
                                        <Tab
                                            key={ index }
                                            title={ value.title }
                                            showClose={ true }
                                        />
                                    );
                                })
                            }
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

function mapStateToProps () {
    return {};
}

export default connect(mapStateToProps)(App);
