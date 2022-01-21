import React, { Component } from "react";
import './app.scss';
import Header from "../header/header"
import PostList from "../postList/postList";
import PostAddForm from "../postAddForm/postAddForm";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { post: 'Привіт!', important: false, like: false, id: 1 },
                { post: 'Тут ти можеш записувати свої думки', important: false, like: false, id: 2 },



            ]
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onToggleLike = this.onToggleLike.bind(this)

        this.maxId = 3
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id)

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]
            return {
                data: newArr
            }
        });
    }


    addItem(body) {
        const newItem = {
            post: body,
            important: false,
            id: this.maxId++,
        }

        this.setState(({ data }) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = { ...old, important: !old.important };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }


        })
    }

    onToggleLike(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = { ...old, like: !old.like };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }


        })
    }



    render() {
        const liked = this.state.data.filter(item => item.like).length
        const allPosts = this.state.data.length
        return (
            <div className="app" >
                <div className="container-fluid">
                    <div className="container">
                        <Header
                            liked={liked}
                            allPosts={allPosts} />

                        <PostList
                            posts={this.state.data}
                            onDelete={this.deleteItem}
                            onToggleImportant={this.onToggleImportant}
                            onToggleLike={this.onToggleLike} />
                        <PostAddForm
                            onAdd={this.addItem} />
                    </div>
                </div>
            </div>
        )
    }
}

