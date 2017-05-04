import React from 'react';

import Tabs, { Tab } from '../Tabs';
import Reload from '../Reload';
import fileContent from '../FileContent';

const Editor = (props) => {

    function renderTabs () {
        return props.tabs.map((value, index) => {
            return (
                <Tab
                    key={index}
                    title={value}
                    icon={props.icons[value]}
                    showClose={true}
                />
            );
        });
    }

    function  buildEmptyClass (inputClass) {
        return (props.tabs.length === 0) ? inputClass + ' empty' : inputClass;
    }

    return (
        <div className="editor">
            <div className={buildEmptyClass('tab-bar')}>
                <Tabs active={props.activeTab}
                      onTabSwitch={tab => props.onTabSwitch(tab)}
                      onTabClose={tab => props.onTabClose(tab)}
                      onTabPositionChange={(a, b) => props.onTabPositionChange(a, b)}
                      draggable={true}>
                    {renderTabs()}
                </Tabs>
            </div>
            <div className={buildEmptyClass('container-fluid content-editor')}>
                <div className="row">
                    <div className="col-xs-12">
                        {
                            props.tabs.length === 0 &&
                            <Reload onReload={() => props.onReload()}/>
                        }
                        {
                            props.tabs.length > 0 &&
                            props.tabs[props.activeTab] &&
                            typeof fileContent[props.tabs[props.activeTab]] === 'function' &&
                            fileContent[props.tabs[props.activeTab]]()
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editor;
