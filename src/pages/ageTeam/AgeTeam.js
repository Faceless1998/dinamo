import React from "react";
import styles from "./AgeTeam.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const AgeTeam = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>ასაკობრივი გუნდები</title>
        </Helmet>
        <div className={styles.container}>
          <div></div>
          AgeTeam
        </div>
      </HelmetProvider>
    </>
  );
};
