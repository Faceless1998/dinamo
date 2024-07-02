import React from "react";
import styles from "./HistoryOfTheTeam.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const HistoryOfTheTeam = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>გუნდის ისტორია</title>
        </Helmet>
        <div className={styles.container}> HistoryOfTheTeam</div>
      </HelmetProvider>
    </>
  );
};
