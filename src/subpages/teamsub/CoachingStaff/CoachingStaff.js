import React from "react";
import styles from "./CoachingStaff.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const CoachingStaff = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>სამწვრთნელო შტაბი</title>
        </Helmet>
        <div className={styles.container}> CoachingStaff</div>
      </HelmetProvider>
    </>
  );
};
