import React from "react";
import Style from "./Features.module.css";

const Features = () => {
  const Feat = [
    {
      h1: "🌏",
      h3: "Works Worldwide",
      p: "No other free streaming service delivers more content to and from more countries worldwide.",
    },
    {
        h1: "💯",
        h3: "Thousands of Titles",
        p: "Choose from movies, shows, sports and music documentaries, AMC series, Live TV and more.",
      },
      {
        h1: "💰",
        h3: "Always 100% Free",
        p: "Welcome to instant gratification at its best. Watch now without any payment or subscription and end the search for free movie websites.",
      },
      {
        h1: "💻",
        h3: "Device-Friendly",
        p: "Stream the good stuff from your favorite devices including Apple, Android, Smart TVs and more.",
      },
  ];
  return (
    <>
      <div className="container d-flex align-items-center justify-content-between">
        {Feat.map((Feat) => (
          <div className={Style.feat}>
            <h1 className={Style.h1}>{Feat.h1}</h1>
            <h3 className={Style.h3}>{Feat.h3}</h3>
            <p className={Style.p}>{Feat.p}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
