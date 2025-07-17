import React from "react";
import style from "./About.module.css";

const About = () => {
  const text = [
    {
      img: "./micro1.avif",
      h3: "The latest blockbuster movies",
      p: "Watch the latest and biggest movies before they are on DVD or subscription services. Choose from our huge selection of films in 4k UHD HDR or 1080p HD, across a wide variety of genres. And withbonus movie content, you’ll be able to enjoy additional features such as director’s commentaries, deleted scenes, and interviews with the cast and crew.",
      a: "Watch it Today",
    },

    {
      img: "./micro2.avif",
      h3: "TV without the commercials",
      p: "Try our massive catalog of commercial-free TV shows, in 1080p HD, the day after they air on broadcast networks. Buy single episodes, or buy a season pass to save up to 30% per episode and get the latest episodes automatically delivered to your library.",
      a: "Shop for new TV show",
    },

    {
      img: "./micro3.avif",
      h3: "Watch at home or on the go",
      p: "Rent or buy a movie or TV show from the Microsoft Store on Xbox, Windows, and Microsoft.com and it will instantly appear in the Movies & TV app on your Microsoft devices.* Need to watch the latest movies and TV shows now? If you have a broadband connection, stream to watch instantly. Travelling? Download to your Windows PC or tablet so you can enjoy it on the road, even without an internet connection.",
      
      a: "Learn more about Movies Anywhere",
    },

    {
      img: "./micro4.avif",
      h3: "Step 1: Sign in",
      p: "Sign into your Microsoft account. If you have used Microsoft services in the past — like Xbox, Outlook.com, OneDrive, or Skype — you already have a Microsoft account. Make sure you use the same Microsoft account on all the devices you want to access your content on.",
      a: "Create a new MicroSoft account",
    },

    {
      img: "./micro5.avif",
      h3: "Step 2: Browse",
      p: "Go to the Microsoft Store on Xbox, Windows, or the Web to rent or buy your favorite movies and TV shows.",
      a: "MicroSoft Movies & TV store",
    },

    {
      img: "./micro6.avif",
      h3: "Step 3: Enjoy",
      p: "When you shop Microsoft Movies & TV, you’ll earn Microsoft Rewards points you can redeem for gift cards, sweepstakes entries, nonprofit donations, and more. It’s the easiest way to get rewarded for doing what you already love to do.",
      a: "Learn more about Movies Anywhere",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between mb-5" id={style.max}>
          {text.map((text) => (
            <div className={style.main}>
              <img src={text.img} alt="" />
              <h3>{text.h3}</h3>
              <p>{text.p}</p>
              <a href="#">{text.a}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
