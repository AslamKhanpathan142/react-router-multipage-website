import React from 'react'
import Css from './Movie.module.css'
import Slider from './Movie/Slider'
import MovieCard from './Movie/MovieCard'
import Detail from './Movie/Detail'
const Movie = ({movies, values}) => {
  return (
    <>
    <Slider></Slider>
    <MovieCard movies={movies} values={values}></MovieCard>
    <Detail></Detail>
    </>
  )
}

export default Movie
