import React from "react";

import symbols from "../../assets/svgs/symbols.svg";

const Tab = props => {
    const backgroundColor = props.backgroundColor;
    const iconName = props.iconName;
    return (
        <div className="tab" style={{ backgroundColor: `${backgroundColor}` }}>
            <svg className="tab-icon">
                <use href={symbols + `#${iconName}`}></use>
            </svg>
        </div>
    );
};

export default Tab;
