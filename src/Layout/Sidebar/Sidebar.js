import React from "react";

import UserProfile from "../../Components/Sidebar-components/User-profile.js";
import UserNavItem from "../../Components/Sidebar-components/User-nav-item.js";
import UserSettingsNav from "../../Components/Sidebar-components/User-settings-nav.js";

import "./Sidebar.css";

const Sidebar = () => {
  const sidebarUserNavData = [
    {
      iconName: "icon-rocket",
      iconValue: "Dashboard"
    },
    {
      iconName: "icon-user",
      iconValue: "Clients"
    },
    {
      iconName: "icon-bookmark-thin",
      iconValue: "Invoices"
    },
    {
      iconName: "icon-file-text",
      iconValue: "Estimates"
    },
    {
      iconName: "icon-user-double",
      iconValue: "My Team"
    }
  ];

  const sidebarUserNavCards = sidebarUserNavData.map((itemData, index) => {
    return (
      <UserNavItem
        iconName={itemData.iconName}
        iconValue={itemData.iconValue}
      />
    );
  });

  return (
    <div className="sidebar-container">
      <nav className="sidebar">
        <UserProfile UserName="Joulie Bell" />

        <div className="sidebar__main-user-nav">{sidebarUserNavCards}</div>

        <div className="sidebar__settings-nav">
          <UserSettingsNav iconName="icon-gear-thin" iconValue="Settings" />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
