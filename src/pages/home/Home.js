import React from "react";
import styles from "./Home.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>მთავარი</title>
        </Helmet>
        <div className={styles.container}> Home</div>
      </HelmetProvider>
    </>
  );
};
