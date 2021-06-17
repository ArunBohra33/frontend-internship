import React from "react";
import { Link } from "react-router-dom";

import symbols from "../../assets/svgs/symbols.svg";

const UserNavItem = props => {
  const iconName = props.iconName;
  const iconValue = props.iconValue;

  return (
    <div className="sidebar__user-nav">
      <ul className="sidebar__user-nav-list">
        <Link to={iconValue.toLowerCase()}>
          <li className="sidebar__user-nav--list-list-item">
            <svg className="sidebar__user-nav--icon">
              <use href={symbols + `#${iconName}`}></use>
            </svg>
            <span className="nav-list-name">{iconValue}</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default UserNavItem;
