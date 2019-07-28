import React, {Component} from 'react'
import { Button } from 'antd';

export default class Page1 extends Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this)
    }

    render() {
        return (
            <>
              <Button onClick={this.onClick}>test Button</Button>
            </>
        )
    }

    onClick() {
        console.log("=====")
    }
}