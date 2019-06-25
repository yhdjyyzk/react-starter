import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import HelloWorld from '@/components/HelloWorld.jsx'
import ToDo from '../components/ToDo'
import Routers from '../router/Routers'
import page0Reducer from '../store/page0/reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(page0Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            // <ToDo/>
            <div>
                {/* <HelloWorld text="Jack"></HelloWorld> */}
                <Provider store={store}>
                    <Routers />
                </Provider>
            </div>
        )
    }
}