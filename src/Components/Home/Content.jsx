import React from "react";
import Styles from "./Content.module.css";

const Content = () => {
  const Cont = [
    {
      h2: "See what’s new on Pluto TV, Tubi, & more.",
      p: "Select your favorite streaming services to discover more, search faster, and get curated recommendations—all without ever leaving Plex. Connect with friends to see who’s watching what, where.",
      button: "Discover more now",
      img: "./img5.png",
    },

    {
      img: "./img3.png",
      h2: "It has never been easier to watch free movies online.",
      p: "Once you register for a free account with Plex, we’ll keep your place from screen to screen as long as you’re signed in. No matter what device you choose, your free movies will pick up where you left off with ease.",
      button: "Watch Free",
    },
  ];
  return (
    <>
       {Cont.map((Cont, index) => (
      <div id={Styles.div} className={index === 1 && "bg-secondary"}>
        <div className="container">
          {/* {Cont.map((Cont, index) => ( */}
            {/* <div className={index === 1 && "bg-dark"}> */}
              <div
                className="row d-flex justify-content-center align-items-center "
                id={Styles.main}
              >
                <div className="col-lg-6 ">
                  <h2 className={Styles.h2}>{Cont.h2}</h2>
                  <p className={Styles.p}>{Cont.p}</p>
                  <button
                    type="button"
                    class="btn btn-warning"
                    id={Styles.buttn}
                  >
                    {Cont.button}
                  </button>
                </div>

                <div
                  className={`col-lg-6 ${index === 1 && "order-first"}`}
                  id={Styles.imgDiv}
                >
                  <img src={Cont.img} alt="" id={Styles.img1} />
                </div>
              </div>
            </div>
          {/* ))} */}
        </div>
    //   </div>
       ))}
    </>
  );
};

export default Content;
