import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import About from '@/pages/About';
import NoMatch from '@/pages/NoMatch';

const basename = process.env.NODE_ENV === 'development' ? '/' : '/react-starter';

export default class Routers extends Component {
  render () {
    return (
      <BrowserRouter basename={basename}>
        <div><Link to='/home'>Home</Link></div>

        <Switch>
          <Route path='/about' component={About} />
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
