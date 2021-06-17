import React from "react";

import Dot from "../Workspace-components/Dot";
import HeroImg from "../../assets/img/hero-img.png";

const Ad = () => {
  return (
    <div className="ad" style={{ "background-image": `url(${HeroImg})` }}>
      <div className="ad-dots-container">
        <Dot />
        <Dot />
        <Dot />
      </div>

      <h2 className="invoicer-apps">
        Work Anywhere with the invoicer mobile apps.
      </h2>
    </div>
  );
};

export default Ad;
