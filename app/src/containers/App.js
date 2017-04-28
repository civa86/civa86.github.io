import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

//Components
import SplitPane from 'react-split-pane';
import Code from '../components/Code';

class App extends Component {

    setupDimensions (size) {
        const w = $(window).width();
        if (w) {
            $('.content').width(w - size);
        }
    }

    componentDidMount () {
        $('.content').width($('.content').width());
    }

    render () {
        return (
            <SplitPane split="vertical" minSize={50} defaultSize={200} onChange={size => this.setupDimensions(size)}>
                <div className="sidebar">
                    <div>
                        asd
                    </div>
                </div>
                <div className="content">
                    <div className="container-fluid">
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
