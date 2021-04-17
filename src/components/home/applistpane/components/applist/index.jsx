import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { AppListItem, AppListShimmer } from "../index";

import { loadAppList, loadAppStats } from "../../../../../reducers/rootReducer";

import "./styles/index.scss";

export default function AppList() {
  const dispatch = useDispatch();
  const applist = useSelector((state) => state.apps);
  const appstats = useSelector((state) => state.stats);

  useEffect(() => {
    /* 
     EDGE CASE: Back Navigation from details page.
     Only run this, if data for all the apps isn't already stored 
     */
    if (applist.length === 0) {
      loadAppList(dispatch);
      loadAppStats(dispatch);
    } else if (applist.length > 0 && Object.keys(appstats).length === 0)
      loadAppStats(dispatch);
  }, []);

  return (
    <div className="applist__wrapper">
      {applist?.length === 0 && <AppListShimmer />}
      {applist?.length > 0 &&
        Object.keys(appstats)?.length > 0 &&
        applist.map((e) => (
          <AppListItem
            app_id={e.id}
            key={e.id}
            name={e.appName}
            publisher={e.publisherName}
            stats={appstats[e.id][appstats[e.id].length - 1]}
          />
        ))}
    </div>
  );
}
