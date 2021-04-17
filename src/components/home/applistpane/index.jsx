import React from "react";

import { AppListHeader, AppList  } from "./components";

import "./styles/index.scss";

export default function AppListPane() {
  return (
    <div className="col-xl-6 col-md-6 col-xs-12 applist__pane">
      <AppListHeader />

      <AppList />
    </div>
  );
}
