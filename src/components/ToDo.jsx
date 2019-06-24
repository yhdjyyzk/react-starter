import React, { Component } from 'react'
import TodoList from './ToDoList'
import TodoInput from './ToDoInput'

export default class ToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoList: []
        }

        this.onAdd = this.onAdd.bind(this)
        this.onListChange = this.onListChange.bind(this)
    }

    // static getDerivedStateFromProps() {

    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) { // 返回值将在componentDidUpdate中作为参数

    // }

    render() {
        return (
            <div>
                <TodoInput onSubmit={this.onAdd} />
                <TodoList list={this.state.todoList} onChange={this.onListChange} />
            </div>
        )
    }

    onAdd(text) {
        const nextTodo = [...this.state.todoList]
        nextTodo.push({
            text,
            checked: false
        })
        this.setState({
            todoList: nextTodo
        })
    }

    onListChange(index, checked, text) {
        const nextTodo = [...this.state.todoList]
        nextTodo[index].checked = checked
        this.setState({
            todoList: nextTodo
        })
    }
}