import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { useSelector, useDispatch } from "react-redux";
import { loadAppList } from "../../reducers/rootReducer";
import { DetailsHeader, DetailsWrapper } from "../../components/details";

export default function Details() {
  const applist = useSelector((state) => state.apps);
  const dispatch = useDispatch();

  let { id } = useParams();

  useEffect(() => {
    if (!applist?.length > 0) loadAppList(dispatch);
  }, [applist]);

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
  >
      <div className="details__page">
        <DetailsHeader />

        {applist?.length > 0 && (
          <DetailsWrapper
            id={id}
            app={applist.find((e) => e.id == id).appName}
            publisher={applist.find((e) => e.id == id).publisherName}
          />
        )}
      </div>
    </motion.div>
  );
}
