import React from 'react';
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router';

import AuthOrApp from './authOrApp';
import BillingCycle from '../billingCycle/billingCycle';
import Dashboard2 from '../dashboard2/dashboard2';

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard2}/>
            <Route path='billingCycles' component={BillingCycle}/>
        </Route>
        <Redirect from='*' to='/'/>
    </Router>
)