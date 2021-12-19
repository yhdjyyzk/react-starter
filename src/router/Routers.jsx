import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import pkg from '../../package.json';
import { asyncComponent } from '@/components/async-component/asyncComponent';

const basename = process.env.NODE_ENV === 'development' ? '/' : '/' + pkg.name;

export default class Routers extends Component {
  render () {
    return (
      <BrowserRouter basename={basename}>
        <div><Link to='/home'>Home</Link></div>

        <Switch>
          <Route path='/about' component={asyncComponent(() => import('@/pages/About'))} />
          <Route component={asyncComponent(() => import('@/pages/NoMatch'))} />
        </Switch>
      </BrowserRouter>
    );
  }
}
