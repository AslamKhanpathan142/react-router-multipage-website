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
