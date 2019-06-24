import React, { Component } from 'react'

export default class ToDoInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }

        this.onInput = this.onInput.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.onInput} />
                <input type="button" value="submit" onClick={this.onClick} />
            </div>
        )
    }

    onInput(e) {
        this.setState({
            text: e.target.value
        })
    }

    onClick() {
        this.props.onSubmit(this.state.text)
    }
}