import React from "react";

import "./styles/index.scss";

export default function IconItem({ icon, text }) {
  return (
    <div className="icon__item col-6">
      <img src={icon} alt={text} className="icon__img" />
      <div className="icon__description">{text}</div>
    </div>
  );
}
