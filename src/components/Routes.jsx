import React, { useEffect } from 'react'

import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const Routes = () => {


    return (
        <div>
            {console.log("Routes")}
            <Switch>
                <Route path='/' exact render={() => <Dashboard/>} />
                <Route path='/customers' component={Customers} />
            </Switch>
        </div>
    )
}

export default Routes
