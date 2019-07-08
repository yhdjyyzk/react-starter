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
            <>
                {
                    this.props.blogs.map(item => {
                        return (
                            <ul key={item.id}>
                                <li key="1">{item.id}</li>
                                <li key="2" dangerouslySetInnerHTML={{ __html: item.title }}></li>
                                <li key="3" dangerouslySetInnerHTML={{ __html: item.description }}></li>
                                <li key="4" dangerouslySetInnerHTML={{ __html: item.content }}></li>
                                <li key="5">{item.labels}</li>
                            </ul>
                        )
                    })
                }
                <div onClick={this.onClick}>page0: ===> {this.props.count}</div>
            </>
        )
    }

    onClick() {
        this.props.add()
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
        blogs: state.blogs
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