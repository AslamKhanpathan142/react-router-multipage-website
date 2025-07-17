import Hader from "./Components/Hader";
import "./App.css";
import Footer from "./Components/Footer";
import Partner from "./Components/Partner";
import { useRef, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const movieName = useRef(null);
  const [values, setvalues] = useState("titanic");

  const change = (evt) => {
    evt.preventDefault();

    console.log(evt);
    let Name = movieName.current.value;
    setvalues(Name);
  };

  //const [movies, setmovies] = useState([]);

  // const url = `http://www.omdbapi.com/?apikey=ce417c0b&s=${values}`;
  // const getMovie = async () => {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //  //console.log(data);
  //   setmovies(data.Search || []);
  // };

  // useEffect(() => {
  //   getMovie();
  // }, [values]);

  return (
    <>
      <Hader change={change} values={values} movieName={movieName}></Hader>

      <Outlet></Outlet>

      <Partner></Partner>

      <Footer></Footer>
    </>
  );
}

export default App;
