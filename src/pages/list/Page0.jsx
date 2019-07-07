import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionTypes from '../../store/page0/actionTypes'
import { getBlogs } from '../../store/page0/actions'

class Page0 extends Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this)
    }

    componentWillMount() {
        this.props.getBlogs()
    }

    render() {
        return (
            <div onClick={this.onClick}>page0: ===> {this.props.count}</div>
        )
    }

    onClick() {
        this.props.add()
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        add() {
            dispatch({
                type: actionTypes.ADD,
                data: 1 //ownProps.count + 1
            })
        },
        getBlogs() {
            dispatch(getBlogs(10, 10))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page0)