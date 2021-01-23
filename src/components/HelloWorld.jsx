import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HelloWorld extends Component {
  constructor (props) {
    super(props);

    this.state = {
      text: ''
    };

    this.clickMe = this.clickMe.bind(this);
  }

  render () {
    return (
            <div>
                <div>
                    <Link to='/page0'>page0</Link>
                    <Link to='/page1'>page0</Link>
                    <Link to='/page2'>page0</Link>
                </div>
            </div>
            // <div onClick={this.clickme}>hello, {this.props.text}, {this.state.text}</div>
    );
  }

  clickMe () {
    const text = Math.random();
    this.setState({
      text
    });
  }
}

HelloWorld.defaultProps = {
  text: 'Mary'
}
;
