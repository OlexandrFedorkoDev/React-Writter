import React, { Component } from "react";

import './postListItem.scss';


export default class PostListItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         important: false,
    //         like: false
    //     };
    //     this.onImportant = this.onImportant.bind(this)
    //     this.onLike = this.onLike.bind(this)

    // }




    // onImportant() {
    //     this.setState(({ important }) => {
    //         return {
    //             important: !important
    //         }
    //     });
    // }

    // onLike() {
    //     this.setState(({ like }) => {
    //         return {
    //             like: !like
    //         }
    //     });
    // }
    render() {


        let classNamesImportant = 'fas fa-star icon'
        let classNamesLike = 'fas fa-heart icon'

        if (this.props.important === true) {
            classNamesImportant = classNamesImportant + ' important'
        }
        if (this.props.like === true) {
            classNamesLike = classNamesLike + ' like'
        }
        return (
            <div className='post_list-item' >

                <span className="post_list_item-txt">
                    {this.props.post}
                </span>
                <div className="post_list-item_btn-box">
                    <button
                        className="post_list_item-btn"
                        onClick={this.props.onToggleImportant}>

                        <i className={classNamesImportant}></i>
                    </button>


                    <button
                        className="post_list_item-btn"
                        onClick={this.props.onDelete}>


                        <i className="fas fa-trash-alt icon"></i>
                    </button>


                    <button
                        className="post_list_item-btn"
                        onClick={this.props.onToggleLike}>

                        <i className={classNamesLike}></i></button>
                </div>

            </div>
        )
    }
}

