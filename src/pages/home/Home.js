import React from "react";
import styles from "./Home.module.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NextGame from "./NextGame";
import IMGMAIN from "./logoes/ბათუმის_დინამოს_ლოგო.jpg"

const nextTour = [
  {
    gameFieldStatus: "Home",
    versusTeam: "Dila Gori",
    versusTeamLogo: IMGMAIN,
    gameData: "2024-08-08",
    gameTime: "9:30 AM GMT+0",
    stadium: "New Euro Arena",
    league: "World Cup League",
  },
  {
    gameFieldStatus: "Away",
    versusTeam: "Soccer",
    versusTeamLogo: IMGMAIN,
    gameData: "2024-08-30",
    gameTime: "9:30 AM GMT+0",
    stadium: "Old Trafford",
    league: "World Cup League",
  },
  // Add more games as needed
];
export const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>მთავარი</title>
        </Helmet>
        <div className={styles.container}> Home</div>
      </HelmetProvider>
      <div className="App">
      <NextGame games={nextTour} />
    </div>
    </>
  );
};
