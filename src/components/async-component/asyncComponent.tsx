import * as React from 'react';

export function asyncComponent(importComponent) {
  return class AsyncComponent extends React.Component<any, {
    component: any
  }> {
    state = {
      component: null
    };

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component
      });
    }

    render() {
      const C = this.state.component;
      return (C !==null) ? <C { ...this.props } /> : null;
    }
  };
}
