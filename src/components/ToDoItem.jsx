import React, { Component } from 'react'

export default class ToDoItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checked: true,
            text: ''
        }

        this.onChange = this.onChange.bind(this)
    }

    componentWillMount() {
        this.state.checked = this.props.checked
        this.state.text = this.props.text
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.checked !== this.props.checked
    }

    render() {
        return (
            <div>
                <input type="checkbox" checked={this.state.checked} onChange={this.onChange} />
                {this.state.text}
            </div>
        )
    }

    onChange(e) {
        this.setState((state, props) => ({
            checked: !state.checked
        }),
            () => {
                this.props.onItemChange(this.props.index, this.state.checked, this.state.text)
            }
        )
    }
}