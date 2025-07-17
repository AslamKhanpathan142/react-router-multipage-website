import React, { useEffect, useState, useRef } from "react";
import css from "./MovieCard.module.css";

const MovieCard = ({values}) => {
 const [movies, setmovies] = useState([]);
 

 

  const url = `http://www.omdbapi.com/?apikey=ce417c0b&s=${values}`;
  const getMovie = async () => {
    const res = await fetch(url);
    const data = await res.json();
   //console.log(data);
    setmovies(data.Search || []);
  };

  useEffect(() => {
    getMovie();
  }, [values]);
    
  return (
    <>
      <div className="container" id={css.main}>
        <h1>Top Movies</h1>
       
        <div className="d-flex" id={css.max}>
           {movies.map((movie) => ( 
            <div className="bg-dark" id={css.imgdiv}>
              <img src={movie.Poster} alt="" className={css.img} />
              <h3>Movie: {movie.Title}</h3>
              <h3>Year: {movie.Year}</h3>
            </div>
          ))} 
        </div>
        </div>
    
    </>
  );
};

export default MovieCard;
