import React from 'react';

import Code, { CodeLine, Tabulator, curlyStart, curlyEnd } from '../Code';

const Skills = () => {

    function renderReturnValues (v) {
        const values = v || ['frameworks', 'tools', 'unitTest']
        return (
            <span>
                <CodeLine>
                    <Tabulator/>
                    <span className="tag3">return </span>
                    <span className="common">[</span>
                <span className="hidden-xs hidden-sm">
                    &nbsp;
                    {values.map((e, i) => (
                        <span key={i}>
                            <span className="operator">...</span>
                            <span className="common">{e}</span>
                            {
                                i !== (values.length - 1) &&
                                ', '
                            }
                        </span>
                    ))}
                    <span className="common"> ]</span>
                </span>
                </CodeLine>
                {values.map((e, i) => (
                    <CodeLine key={i} classes="visible-xs visible-sm">
                        <Tabulator classes="visible-xs-inline"/>
                        <Tabulator/>
                        <Tabulator/>
                        <span className="operator">...</span>
                        <span className="common">{e}</span>
                        {
                            i !== (values.length - 1) &&
                            ','
                        }
                    </CodeLine>
                ))}
                <CodeLine classes="visible-xs visible-sm">
                    <Tabulator/>
                    <span className="common">]</span>
                </CodeLine>
            </span>
        );
    }

    //TODO implement copy...

    return (
        <Code>
            <CodeLine classes="hidden-xs">
                <span className="comment">{'/*'}</span>
            </CodeLine>
            <CodeLine classes="hidden-xs">
                <Tabulator/>
                <span className="comment">
                    <span className="">
                        <i className="octicon octicon-clippy"/>
                        Copy and
                    </span>
                    &nbsp;
                </span>
                <span className="comment">{'Run me on your Browser Console'}</span>
            </CodeLine>
            <CodeLine classes="hidden-xs">
                <span className="comment">{'*/'}</span>
            </CodeLine>
            <CodeLine classes="hidden-xs"/>
            {/* CONSTANTS */}
            <CodeLine>
                <span className="tag3">var </span>
                <span className="common">operatingSystems {'='} [</span>
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <span className="tag4">"Mac OS X"</span>,
                &nbsp;
                <span className="tag4">"Windows"</span>,
                <span className="hidden-xs hidden-sm">
                    &nbsp;
                    <span className="tag4">"Ubuntu"</span>,
                    &nbsp;
                    <span className="tag4">"RedHat"</span>
                </span>
            </CodeLine>
            <CodeLine classes="visible-xs visible-sm">
                <Tabulator/>
                <span className="tag4">"Ubuntu"</span>,
                &nbsp;
                <span className="tag4">"RedHat"</span>
            </CodeLine>
            <CodeLine><span className="common">]</span></CodeLine>
            <CodeLine/>
            <CodeLine>
                <span className="tag3">var </span>
                <span className="common">editors {'='} [</span>
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <span className="tag4">"IntelliJ"</span>,
                &nbsp;
                <span className="tag4">"Atom"</span>,
                &nbsp;
                <span className="tag4">"Vim"</span>,
                <span className="hidden-xs hidden-sm">
                    &nbsp;
                    <span className="tag4">"Eclipse"</span>,
                    &nbsp;
                    <span className="tag4">"NetBeans"</span>
                </span>
            </CodeLine>
            <CodeLine classes="visible-xs visible-sm">
                <Tabulator/>
                <span className="tag4">"Eclipse"</span>,
                &nbsp;
                <span className="tag4">"NetBeans"</span>
            </CodeLine>
            <CodeLine><span className="common">]</span></CodeLine>
            <CodeLine/>
            {/* JAVASCRIPT */}
            <CodeLine>
                <span className="tag3">function </span>
                <span className="tag2">javascript </span>
                <span className="common">() {curlyStart()}</span>
            </CodeLine>

            {/* JAVASCRIPT: frameworks */}
            <CodeLine>
                <Tabulator/>
                <span className="tag3">let </span>
                <span className="common">frameworks </span>
                <span className="operator">{'='} </span>
                <span className="common">[ </span>
            </CodeLine>
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <Tabulator/>
                <span className="tag4">"React"</span>,
                &nbsp;
                <span className="tag4">"Angular"</span>,
                <span className="hidden-xs hidden-sm">
                    &nbsp;
                    <span className="tag4">"jQuery"</span>,
                    &nbsp;
                    <span className="tag4">"Ember"</span>
                </span>
            </CodeLine>
            <CodeLine classes="visible-xs visible-sm">
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <Tabulator/>
                <span className="tag4">"jQuery"</span>,
                &nbsp;
                <span className="tag4">"Ember"</span>
            </CodeLine>
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <span className="common">],</span>
            </CodeLine>

            {/* JAVASCRIPT: tools */}
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <span className="common">tools </span>
                <span className="operator">{'='} </span>
                <span className="common">[</span>
            </CodeLine>
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <Tabulator/>
                <span className="tag4">"NodeJs"</span>,
                &nbsp;
                <span className="tag4">"Electron"</span>,
            </CodeLine>
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <Tabulator/>
                <span className="tag4">"Babel"</span>,
                &nbsp;
                <span className="tag4">"Webpack"</span>,
                <span className="hidden-xs hidden-sm">
                    &nbsp;
                     <span className="tag4">"Grunt"</span>,
                     &nbsp;
                     <span className="tag4">"Bower"</span>
                </span>
            </CodeLine>
            <CodeLine classes="visible-xs visible-sm">
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <Tabulator/>
                <span className="tag4">"Grunt"</span>,
                &nbsp;
                <span className="tag4">"Bower"</span>
            </CodeLine>
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <span className="common">],</span>
            </CodeLine>

            {/* JAVASCRIPT: unitTest */}
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <span className="common">unitTest </span>
                <span className="operator">{'='} </span>
                <span className="common">[</span>
            </CodeLine>
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <Tabulator/>
                <span className="tag4">"Mocha"</span>,
                &nbsp;
                <span className="tag4">"Chai"</span>,
                <span className="hidden-xs hidden-sm">
                    &nbsp;
                    <span className="tag4">"Karma"</span>,
                    &nbsp;
                    <span className="tag4">"Jasmine"</span>
                </span>
            </CodeLine>
            <CodeLine classes="visible-xs visible-sm">
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <Tabulator/>
                <span className="tag4">"Karma"</span>,
                &nbsp;
                <span className="tag4">"Jasmine"</span>
            </CodeLine>
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <span className="common">]</span>
            </CodeLine>
            <CodeLine/>
            {/* JAVASCRIPT: return */}
            {renderReturnValues()}
            <CodeLine><span className="common">{curlyEnd()}</span></CodeLine>
            <CodeLine/>
            {/* PHP */}
            <CodeLine>
                <span className="tag3">function </span>
                <span className="tag2">php </span>
                <span className="common">() {curlyStart()}</span>
            </CodeLine>

            {/* PHP: frameworks */}
            <CodeLine>
                <Tabulator/>
                <span className="tag3">let </span>
                <span className="common">frameworks </span>
                <span className="operator">{'='} </span>
                <span className="common">[ </span>
            </CodeLine>
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <Tabulator/>
                <span className="tag4">"Zend"</span>,
                &nbsp;
                <span className="tag4">"Symfony"</span>
            </CodeLine>
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <span className="common">],</span>
            </CodeLine>

            {/* PHP: tools */}
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <span className="common">tools </span>
                <span className="operator">{'='} </span>
                <span className="common">[</span>
            </CodeLine>
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <Tabulator/>
                <span className="tag4">"Propel"</span>,
                &nbsp;
                <span className="tag4">"Composer"</span>
            </CodeLine>
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <span className="common">],</span>
            </CodeLine>

            {/* PHP: unitTest */}
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <span className="common">unitTest </span>
                <span className="operator">{'='} </span>
                <span className="common">[ </span>
                <span className="tag4">"phpUnit"</span>
                <span className="common"> ]</span>
            </CodeLine>
            <CodeLine/>
            {/* PHP: return */}
            {renderReturnValues()}
            <CodeLine><span className="common">{curlyEnd()}</span></CodeLine>
            <CodeLine/>
            {/* CLOJURE */}
            <CodeLine>
                <span className="tag3">function </span>
                <span className="tag2">clojure </span>
                <span className="common">() {curlyStart()}</span>
            </CodeLine>

            {/* CLOJURE: frameworks */}
            <CodeLine>
                <Tabulator/>
                <span className="tag3">let </span>
                <span className="common">frameworks </span>
                <span className="operator">{'='} </span>
                <span className="common">[ </span>
                <span className="tag4">"Luminus"</span>
                <span className="common"> ]</span>,
            </CodeLine>

            {/* CLOJURE: tools */}
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <span className="common">tools </span>
                <span className="operator">{'='} </span>
                <span className="common">[ </span>
                <span className="tag4">"Leiningen"</span>
                <span className="common"> ]</span>
            </CodeLine>
            <CodeLine/>
            {/* CLOJURE: return */}
            {renderReturnValues(['frameworks', 'tools'])}
            <CodeLine><span className="common">{curlyEnd()}</span></CodeLine>
            <CodeLine/>
            {/* DATABASE */}
            <CodeLine>
                <span className="tag3">function </span>
                <span className="tag2">database </span>
                <span className="common">() {curlyStart()}</span>
            </CodeLine>
            {/* DATABASE: return */}
            <CodeLine>
                <Tabulator/>
                <span className="tag3">return </span>
                <span className="common">[ </span>
                <span className="tag4">"MySql"</span>,
                &nbsp;
                <span className="tag4">"MongoDB"</span>
                <span className="common"> ]</span>
            </CodeLine>
            <CodeLine><span className="common">{curlyEnd()}</span></CodeLine>
            <CodeLine/>
            {/* TEMPLATE */}
            <CodeLine>
                <span className="tag3">function </span>
                <span className="tag2">template </span>
                <span className="common">() {curlyStart()}</span>
            </CodeLine>
            {/* TEMPLATE: return */}
            <CodeLine>
                <Tabulator/>
                <span className="tag3">return </span>
                <span className="common">[ </span>
            </CodeLine>
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <span className="tag4">"HTML"</span>,
                &nbsp;
                <span className="tag4">"MarkDown"</span>,
            </CodeLine>
            <CodeLine>
                <Tabulator classes="visible-xs-inline"/>
                <Tabulator/>
                <Tabulator/>
                <span className="tag4">"CSS3"</span>,
                &nbsp;
                <span className="tag4">"Less"</span>,
                &nbsp;
                <span className="tag4">"Sass"</span>
            </CodeLine>
            <CodeLine>
                <Tabulator/>
                <span className="common"> ]</span>
            </CodeLine>
            <CodeLine><span className="common">{curlyEnd()}</span></CodeLine>
            <CodeLine/>
            {/*RESULT*/}
            <span className="hidden-xs">
                <CodeLine>
                    <span className="tag2">alert</span>
                    <span className="common">(</span>
                </CodeLine>
                <CodeLine>
                    <Tabulator/>
                    <span className="tag4">"\u03BB Skills \u03BB</span>
                    <span className="operator">{'\\n'}</span>
                    <span className="operator">{'\\n'}</span>
                    <span className="tag4">"</span>
                    <span className="operator">{' + '}</span>
                </CodeLine>
                <CodeLine>
                    <Tabulator/>
                    <span className="common">[</span>
                </CodeLine>
                <CodeLine>
                    <Tabulator/>
                    <Tabulator/>
                    <span className="operator">...</span>
                    <span className="common">operatingSystems</span>,
                </CodeLine>
                <CodeLine>
                    <Tabulator/>
                    <Tabulator/>
                    <span className="operator">...</span>
                    <span className="common">editors</span>,
                </CodeLine>
                <CodeLine>
                    <Tabulator/>
                    <Tabulator/>
                    <span className="operator">...</span>
                    <span className="tag2">javascript</span>
                    <span className="common">()</span>,
                </CodeLine>
                <CodeLine>
                    <Tabulator/>
                    <Tabulator/>
                    <span className="operator">...</span>
                    <span className="tag2">php</span>
                    <span className="common">()</span>,
                </CodeLine>
                <CodeLine>
                    <Tabulator/>
                    <Tabulator/>
                    <span className="operator">...</span>
                    <span className="tag2">clojure</span>
                    <span className="common">()</span>,
                </CodeLine>
                <CodeLine>
                    <Tabulator/>
                    <Tabulator/>
                    <span className="operator">...</span>
                    <span className="tag2">database</span>
                    <span className="common">()</span>,
                </CodeLine>
                <CodeLine>
                    <Tabulator/>
                    <Tabulator/>
                    <span className="operator">...</span>
                    <span className="tag2">template</span>
                    <span className="common">()</span>
                </CodeLine>
                <CodeLine>
                    <Tabulator/>
                    <span className="common">]</span>
                    <span className="common">.</span>
                    <span className="operator">join</span>
                    <span className="common">(</span>
                    <span className="tag4">"</span>
                    <span className="operator">{', '}</span>
                    <span className="tag4">"</span>
                    <span className="common">)</span>
                </CodeLine>
                <CodeLine>
                    <span className="common">)</span>
                </CodeLine>
                <CodeLine/>
            </span>
        </Code>
    );
};

export default Skills;
