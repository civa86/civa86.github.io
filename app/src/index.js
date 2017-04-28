import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';

/* STYLES */

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'imports?jQuery=jquery!bootstrap/dist/js/bootstrap';

// Icons Font
import 'ionicons/css/ionicons.css';
import 'devicons/css/devicons.css';

// StyleSheet
import '../less/screen.less';

// Favicon
// import '../img/icon.png';

// Text Files: humans
import '../humans.txt';

const
    store = configureStore(),
    history = syncHistoryWithStore(browserHistory, store);

render(
    <AppContainer>
        <Root store={store} history={history}/>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const RootContainer = require('./containers/Root').default;
        render(
            <AppContainer key={Math.random()}>
                <RootContainer store={store} history={history}/>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
