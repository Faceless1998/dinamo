import React from "react";
import styles from "./Team.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const Team = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>გუნდი</title>
        </Helmet>
        <div className={styles.container}> Team</div>
      </HelmetProvider>
    </>
  );
};
