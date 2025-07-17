import React from "react";
import css from "./BoxImg.module.css";

const BoxImg = () => {
  const card = [
    {
      h1: "🎬",
      h2: "Your Media",
      p: "Organize and stream your personal collection of movies, TV, music, and photos anywher on all your devices",
      button: "Organize & Stream",
    },
    {
      h1: "🎧ྀི",
      h2: "Music & Podcasts",
      p: "Over 60 million songs and podcasts, integrated beautifully with your own music collection streamed to all your devices",
      button: "Start 30 Days Free Trial",
    },
    {
      h1: "📺",
      h2: "Live TV & DVR",
      p: "Easily cut cordl Get over the air live and recorded TV as well as web Shows and Plex Name streamed to all your devices",
      button: "Get Live TV & DVR",
    },
    {
      h1: "🖥️",
      h2: "Stream Free TV",
      p: "Coming soon watch! free ad-supported TV and movies on demand on all your devices and you are enjoy free in 30 Days",
      button: "GET Details",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-between">
          {card.map((card) => (
            <div className="" id={css.box}>
              <h1>{card.h1}</h1>
              <h2>{card.h2}</h2>
              <p>
                {card.p}
              </p>
              <button type="button" class="btn btn-warning">
                {card.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BoxImg;
