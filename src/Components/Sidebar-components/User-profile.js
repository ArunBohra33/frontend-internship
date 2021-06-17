import React from "react";

import userImg from "../../assets/img/user.png";

const UserProfile = props => {
    return (
        <div className="sidebar__user-profile">
            <img src={userImg} alt="user profile" className="sidebar__user-profile--img" />
            <p className="sidebar__user-profile--greeting">Welcome back</p>
            <h1 className="sidebar__user-profile--name">{props.UserName}</h1>
        </div>
    );
};

export default UserProfile;
