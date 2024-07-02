import React from "react";
import styles from "./VideoGallery.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
export const VideoGallery = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>ვიდეო გალერეა</title>
        </Helmet>
        <div className={styles.container}> VideoGallery</div>
      </HelmetProvider>
    </>
  );
};
