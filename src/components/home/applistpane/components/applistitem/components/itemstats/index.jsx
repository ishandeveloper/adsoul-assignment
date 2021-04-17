import React from "react";

import "./styles/index.scss";

export default function ItemStats({title, data}) {
  return (
    <div className="item__stat">
      <div className="stat__title">{title}</div>
      <div className="stat__data">{data}</div>
    </div>
  );
}
