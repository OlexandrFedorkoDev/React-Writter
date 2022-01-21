import React, { Component } from "react";
import './postAddForm.scss'

class PostAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        })


        // console.log(e.target.value);

    }

    onSubmit(e) {
        e.preventDefault()
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    }
    render() {
        return (
            <form
                className="add_post-form"
                onSubmit={this.onSubmit} >
                <input
                    className="add_post-input"
                    type="text"
                    placeholder="Про що ви думаєте зараз?"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    // onClick={() => props.onAdd('hello')}
                    className="add_post-btn btn">Додати</button>
            </form >
        )
    }
}

export default PostAddForm