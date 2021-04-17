import React from "react";
import ContentLoader from "react-content-loader";

import "./styles/index.scss";

export default function index() {


  return (
    <>
    <AppListShimmerItem/>
    <AppListShimmerItem/>
    <AppListShimmerItem/>
    <AppListShimmerItem/>
    </>
  );
}


const AppListShimmerItem = () =>{
    return (<div className="applist__shimmer">
    <ContentLoader
      speed={2}
      width={"100%"}
      height={148}
      viewBox={`0 0 600 ${"100%"}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="6" y="4" rx="10" ry="10" width="54" height="54" />
      <rect x="76" y="10" rx="0" ry="0" width="157" height="32" />
      <rect x="76" y="48" rx="0" ry="0" width="80" height="8" />
      <rect x="6" y="80" rx="5" ry="5" width="64" height="12" />
      <rect x="6" y="100" rx="5" ry="5" width="76" height="47" />

      <rect x="100" y="80" rx="5" ry="5" width="64" height="12" />
      <rect x="100" y="100" rx="5" ry="5" width="76" height="47" />

      <rect x="194" y="80" rx="5" ry="5" width="64" height="12" />
      <rect x="194" y="100" rx="5" ry="5" width="76" height="47" />

      <rect x="288" y="80" rx="5" ry="5" width="64" height="12" />
      <rect x="288" y="100" rx="5" ry="5" width="76" height="47" />
    </ContentLoader>
  </div>)
}