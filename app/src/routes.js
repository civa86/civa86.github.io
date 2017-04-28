import React from 'react'
import { Route, Redirect } from 'react-router'

import App from './containers/App';

export default (
    <Route>
        <Route path="/" component={App}/>
        <Redirect from="*" to="index"/>
    </Route>
);
