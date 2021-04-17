import React from "react";

import "./styles/index.scss";

export default function Header() {
  return (
    <div className="applist__header">
      <div className="title">Apps</div>
      <div className="icon">
        <i className="fas fa-cog"></i>
      </div>
    </div>
  );
}
