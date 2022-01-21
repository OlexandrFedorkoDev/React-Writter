import React from "react";
import PostListItem from "../postListItem/postListItem";
import './postList.scss';

const PostList = ({ posts, onDelete, onToggleLike, onToggleImportant }) => {

    const elements = posts.map(function (item) {
        const { id, ...itemProps } = item
        return (

            <li key={item.id} >
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleLike={() => onToggleLike(id)}
                    onToggleImportant={() => onToggleImportant(id)} />
            </li>
        )
    })

    return (
        <div className="post_list-box">
            <ul className="post_list-group">
                {elements}
            </ul>
        </div>
    )
}

export default PostList;