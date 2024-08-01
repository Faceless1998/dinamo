// src/NextGame.js
import React from "react";
import "./NextGame.css";
import IMGMAIN from "./logoes/ბათუმის_დინამოს_ლოგო.jpg";

const NextGame = ({ games }) => {
  const getNearestGame = (games) => {
    const currentDate = new Date();
    let nearestGame = null;

    games.forEach((game) => {
      const gameDate = new Date(game.gameData);
      if (
        !nearestGame ||
        (gameDate >= currentDate && gameDate < new Date(nearestGame.gameData))
      ) {
        nearestGame = game;
      }
    });

    return nearestGame;
  };

  const nearestGame = getNearestGame(games);

  if (!nearestGame) {
    return <div className="upcoming-match-container">No upcoming games</div>;
  }

  const homeTeamLogo =
    nearestGame.gameFieldStatus === "Home"
      ? IMGMAIN
      : nearestGame.versusTeamLogo;
  const awayTeamLogo =
    nearestGame.gameFieldStatus === "Home"
      ? nearestGame.versusTeamLogo
      : IMGMAIN;
  const homeTeamName =
    nearestGame.gameFieldStatus === "Home"
      ? "Dinamo Batumi"
      : nearestGame.versusTeam;
  const awayTeamName =
    nearestGame.gameFieldStatus === "Home"
      ? nearestGame.versusTeam
      : "Dinamo Batumi";

  return (
    <div className="row upcoming-match-container">
      <div className="col-12 title-section">
        <h2 className="heading">Upcoming Match</h2>
      </div>
      <div className="col-lg-6 mb-4">
        <div className="bg-light p-4 rounded match-card">
          <div className="widget-body">
            <div className="widget-vs">
              <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                <div className="team-1 text-center">
                  <img
                    src={homeTeamLogo}
                    alt="Home Team Logo"
                    className="team-logo"
                  />
                  <h3>{homeTeamName}</h3>
                </div>
                <div className="vs-container">
                  <span className="vs">
                    <span>VS</span>
                  </span>
                </div>
                <div className="team-2 text-center">
                  <img
                    src={awayTeamLogo}
                    alt="Away Team Logo"
                    className="team-logo"
                  />
                  <h3>{awayTeamName}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center widget-vs-contents mb-4">
            <h4>{nearestGame.league}</h4>
            <p className="mb-5">
              <span className="d-block">{nearestGame.gameData}</span>
              <span className="d-block">{nearestGame.gameTime}</span>
              <strong className="text-primary">{nearestGame.stadium}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NextGame;
