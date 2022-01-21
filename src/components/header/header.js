import React from "react";
import './header.scss';

const Header = ({ liked, allPosts }) => {
    return (
        <div className="header">
            <div className="logo_box"><span className="blue">W</span>ritter</div>
            <div className="like_txt-box"><span><span className="blue">{allPosts}</span> записів, вподобаних <span className="red">{liked}</span></span></div>
        </div>
    )
}

export default Header