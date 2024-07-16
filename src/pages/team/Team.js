import React from "react";
import styles from "./Team.module.css";
import IMG from "./../../assets/istockphoto-2032181282-170667.webp";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Goalkeeper, Defenders, Midfielder, Forward } from "./members";
import classNames from "classnames";

export const Team = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>გუნდი</title>
        </Helmet>
        <div className={styles.container}>Team</div>
        <div className={styles.allteam}>
          <div className={styles.content}>
            {Goalkeeper.map((player, index) => (
              <div className={styles.linka} key={index}>
                <div className={styles.card}>
                  <div className={styles.wrapper}>
                    <img
                      src={player.img}
                      className={classNames(styles.coverimage, styles.upper)}
                      alt="new"
                    />
                    <img
                      src={IMG}
                      alt="new"
                      className={classNames(styles.coverimage, styles.ipper)}
                    />
                  </div>
                  <div className={styles.context}>
                    <div className={styles.title}>{player.name}</div>
                    <div className={styles.new}>{player.position}</div>
                  </div>
                  <img
                    src={player.imgtransparent}
                    className={styles.character}
                    alt="new"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.content}>
            {Defenders.map((player, index) => (
              <div className={styles.linka} key={index}>
                <div className={styles.card}>
                  <div className={styles.wrapper}>
                    <img
                      src={player.img}
                      className={classNames(styles.coverimage, styles.upper)}
                      alt="new"
                    />
                    <img
                      src={IMG}
                      alt="new"
                      className={classNames(styles.coverimage, styles.ipper)}
                    />
                  </div>
                  <div className={styles.context}>
                    <div className={styles.title}>{player.name}</div>
                    <div className={styles.new}>{player.position}</div>
                  </div>
                  <img
                    src={player.imgtransparent}
                    className={styles.character}
                    alt="new"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.content}>
            {Midfielder.map((player, index) => (
              <div className={styles.linka} key={index}>
                <div className={styles.card}>
                  <div className={styles.wrapper}>
                    <img
                      src={player.img}
                      className={classNames(styles.coverimage, styles.upper)}
                      alt="new"
                    />
                    <img
                      src={IMG}
                      alt="new"
                      className={classNames(styles.coverimage, styles.ipper)}
                    />
                  </div>
                  <div className={styles.context}>
                    <div className={styles.title}>{player.name}</div>
                    <div className={styles.new}>{player.position}</div>
                  </div>
                  <img
                    src={player.imgtransparent}
                    className={styles.character}
                    alt="new"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.content}>
            {Forward.map((player, index) => (
              <div className={styles.linka} key={index}>
                <div className={styles.card}>
                  <div className={styles.wrapper}>
                    <img
                      src={player.img}
                      className={classNames(styles.coverimage, styles.upper)}
                      alt="new"
                    />
                    <img
                      src={IMG}
                      alt="new"
                      className={classNames(styles.coverimage, styles.ipper)}
                    />
                  </div>
                  <div className={styles.context}>
                    <div className={styles.title}>{player.name}</div>
                    <div className={styles.new}>{player.position}</div>
                  </div>
                  <img
                    src={player.imgtransparent}
                    className={styles.character}
                    alt="new"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </HelmetProvider>
    </>
  );
};
