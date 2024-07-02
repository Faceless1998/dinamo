import React from "react";
import styles from "./Photogallery.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const Photogallery = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>ფოტო გალერეა</title>
        </Helmet>
        <div className={styles.container}> Photogallery</div>
      </HelmetProvider>
    </>
  );
};
