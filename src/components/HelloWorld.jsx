import React, { Component } from 'react'

export default class HelloWorld extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>hello, {this.props.text}</div>
        )
    }
}

HelloWorld.defaultProps = {
    text: 'Mary'
}