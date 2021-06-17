import React from "react";
import { Link } from "react-router-dom";

import symbols from "../../assets/svgs/symbols.svg";

const UserSettingsNav = props => {
  const iconName = props.iconName;
  const iconValue = props.iconValue;

  return (
    <div className="sidebar__settings">
      <ul className="sidebar__settings-list">
        <Link to="/settings">
          <li className="sidebar__settings-list--list-item">
            <svg className="sidebar__settings--icon">
              <use href={symbols + `#${iconName}`}></use>
            </svg>
            <span className="nav-list-name">{iconValue}</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default UserSettingsNav;
