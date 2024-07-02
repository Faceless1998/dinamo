import React from "react";
import styles from "./nopage.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const NoPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>გვერდი ვერ მოიძებნა</title>
        </Helmet>
        <div className={styles.container}>გვერდი ვერ მოიძებნა</div>
      </HelmetProvider>
    </>
  );
};
