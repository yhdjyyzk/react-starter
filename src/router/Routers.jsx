import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import Page0 from '../pages/list/Page0'
import Page1 from '../pages/list/Page1'
import Page2 from '../pages/list/Page2'
import NoMatch from '../pages/list/NoMatch'

export default class Routers extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <BrowserRouter>
                <div><Link to='/page0'>page0</Link></div>
                <div><Link to='/page1'>page1</Link></div>
                <div><Link to='/page2'>page2</Link></div>

                <Switch>
                    <Route exact path='/page0' component={Page0} />
                    <Route path='/page1' component={Page1} />
                    <Route path='/page2' component={Page2} />
                    {/* <Redirect from='*' to='/page1' /> */}
                    <Route exact component={NoMatch} />
                </Switch>
            </BrowserRouter>
        )
    }
}