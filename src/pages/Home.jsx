import React, { Component } from 'react'
import HelloWorld from '@/components/HelloWorld.jsx'

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HelloWorld text="Jack"></HelloWorld>
        )
    }
}