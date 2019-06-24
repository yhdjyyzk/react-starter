import React, { Component } from 'react'
import ToDoItem from './ToDoItem'

export default class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.onItemChange = this.onItemChange.bind(this)
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.list.map((item, index) => <ToDoItem
                        key={`${item.text}_${index}`}
                        onItemChange={this.onItemChange}
                        index={index}
                        checked={item.checked}
                        text={item.text}
                    />)
                }
            </React.Fragment>
        )
    }

    onItemChange(index, checked, text) {
        this.props.onChange(index, checked, text)
    }
}