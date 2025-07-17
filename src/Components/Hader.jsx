import React, { useRef, useState,useEffect } from "react";
import style from "./Hader.module.css";
import { gsap } from 'gsap';
import { IoSearchSharp } from "react-icons/io5";
import Content from "./Content";
import { Link } from "react-router-dom";
import { useGSAP } from '@gsap/react'



const Hader = ({change, movieName}) => {
  
  // const boxRef = useRef(null);

  // const click = () => {
  //   gsap.to(boxRef.current, {
  //      rotation: 360,
  //      duration: 2,
  //      borderBottom: "2px solid black",

  //      });
  //     }
  
  
  return (
    <>
    <div className={style.Hader}>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none me-5"
            >
              <img src="./logo4.png" alt="" className={style.logo} />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 column-gap-3">
              <li>
                <Link to="/" className="nav-link px-2 text-white ms-5">
                  Home
                </Link>

               


              </li>
              <li>
                <Link to="/Content" className="nav-link px-2 text-white">
                  
                  Content
                </Link>
              </li>
              <li>
                <Link to="/News" className="nav-link px-2 text-white">
                  News
                </Link>
              </li>
              <li>
                <Link to="/Micro" className="nav-link px-2 text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/Movie" className="nav-link px-2 text-white">
                  Movie
                </Link>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className=""
                placeholder="Search..."
                aria-label="Search"
                id={style.input}
                ref={movieName}
                
              />
            </form>
            <h3 className={style.h} onClick={change}>
            <IoSearchSharp />
            </h3>
           
            <div className="text-end">
              <Link to="/Signin">
              <svg
                width="25"
                height="23"
                viewBox="0 0 38 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.1018 21.9819C27.3337 24.9899 23.401 26.9091 19 26.9091C14.599 26.9091 10.6663 24.9899 7.89819 21.9819C3.23973 24.3361 0.5 28.9715 0.5 35.3182V40.3636H37.5V35.3182C37.5 28.9715 34.7603 24.3361 30.1018 21.9819Z"
                  fill="white"
                />
                <path
                  d="M19 23.5455C25.5019 23.5455 30.7727 18.2746 30.7727 11.7727C30.7727 5.27083 25.5019 0 19 0C12.4981 0 7.22727 5.27083 7.22727 11.7727C7.22727 18.2746 12.4981 23.5455 19 23.5455Z"
                  fill="white"
                />
              </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
    
    </>
  );
};

export default Hader;
