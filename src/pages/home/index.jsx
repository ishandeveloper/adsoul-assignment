import React from "react";
import { motion } from "framer-motion";

import { LeftPane, AppListPane } from "../../components/home";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="home row no-gutters">
        <LeftPane />

        <AppListPane />
      </div>
    </motion.div>
  );
}
