import React from "react";
import stye from "./Button.module.css";

const Button = () => {
  const buttn = [
    "New Releases",
    "Top Selling",
    "Top Rented",
    "Featured Movies",
  ];

  const buttn1 = [
    "New Releases",
    "Top Selling",
    "Featured TV",
  ];
  return (
    <>
      <div className="text-center fs-5 mt-5">
        <a href="#" className="text-decoration-none">
          Find Movies & TV
        </a>
      </div>

      <div className="container">
        <h2 className="text-center mt-5 text-white">movies</h2>
        <div className="text-center">
          {buttn.map((buttn) => (
            <button
              type="button"
              className="btn me-4 mt-5 mb-5"
              id={stye.buttn}
            >
              {buttn}
            </button>
          ))}
        </div>

        <h2 className="text-center text-white">TV</h2>
        <div className="text-center">
          {buttn1.map((buttn1) => (
            <button
              type="button"
              className="btn me-4 mt-5 mb-5"
              id={stye.buttn}
            >
              {buttn1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Button;
