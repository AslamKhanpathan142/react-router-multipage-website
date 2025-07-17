import React from "react";
import styles from "./HomeImg.module.css";
import BoxImg from "./BoxImg";

const HomeImg = () => {
  return (
    <>
      <div className={styles.img}>
        <div className={styles.write}>
          <h1>Stream Smarter</h1>
          <p>
            Your favorite movies, TV, Music, Web Shows and more, all streamed to
            your favorite screens.
          </p>
        </div>
        <BoxImg></BoxImg>
      </div>
    </>
  );
};

export default HomeImg;
