import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import HelloWorld from '@/components/HelloWorld.jsx'
import ToDo from '../components/ToDo'
import Routers from '../router/Routers'

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            // <ToDo/>
            <div>
                {/* <HelloWorld text="Jack"></HelloWorld> */}
                <Routers />
            </div>
        )
    }
}