import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import AuthOrApp from './authOrApp';
import BillingCycle from '../billingCycle/billingCycle';
import Dashboard2 from '../dashboard2/dashboard2';

export default props => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path='/' component={Dashboard2}/>
            <Route path='/billingCycles' component={BillingCycle} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)