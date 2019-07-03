import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Subscriber from '../../views/subscriber'
import Chat from '../../views/chat'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Subscriber} />
            <Route path='/chat' component={Chat} />
        </Switch>
    </BrowserRouter>
)
export default Routes
