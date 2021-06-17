import React from "react";

import symbols from "../../assets/svgs/symbols.svg";

const Dot = props => {
    const fillColor = props.fill;
    return (
        <svg className="three-dots--dot" style={{ fill: fillColor }}>
            <use href={symbols + "#icon-circle"}></use>
        </svg>
    );
};

export default Dot;
