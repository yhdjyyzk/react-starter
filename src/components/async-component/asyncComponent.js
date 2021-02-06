import React, { Component } from 'react';

function asyncComponent (importComponent) {
  return class AsyncComponent extends Component {
    constructor (props) {
      super(props);
      this.state = {
        component: null
      };
    }

    async componentDidMount () {
      const { default: component } = await importComponent();
      this.setState({
        component
      });
    }

    render () {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
}

export {
  asyncComponent
};
