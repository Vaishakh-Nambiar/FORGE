import React from "react";
import { useState } from "react";

import "./Intro.css";

export default function Introloader() {
  const [style, setStyle] = useState("ds-show");

  const changeStyle = () => {
    console.log("You just clicked");

    setStyle("ds-none");
  };

  return (
    <section className={`intro-1 ff-tc ${style} `}>
      <a href="#intro-sec">
        <div className="intro-box " onClick={changeStyle}>
          <div className="intro-btn"></div>
          <div className="intro-btn-txt">GG</div>
        </div>
      </a>
    </section>
  );
}
