import React, { useEffect, useState } from "react";
import Style from "./Newstop.module.css";
import img from "/news.jpg"

const Newstop = () => {
  const [news, setnews] = useState([]);

  //const URL =
    //"https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=9a664f50aade4b6b93215f2d4c32c970";
    const URL = "https://newsapi.org/v2/everything?q=tesla&from=2024-10-21&sortBy=publishedAt&apiKey=9a664f50aade4b6b93215f2d4c32c970";
  const movesnews = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    //console.log(data);
    setnews(data.articles);
   
    
  };

  useEffect(() => {
    movesnews();
  }, []);
  return (
    <>
      <div className="container" id={Style.main}>
        <div className="d-flex mt-5" id={Style.style}>
        {news.map((movie, index) => (
            
          <div className="bg-dark mt-4" id={Style.cont}>
            <div style={{'display' : 'flex', 'justifyItems' : 'center'}}>
            <img src={movie.urlToImage? movie.urlToImage:img} alt="" className={Style.imm}/>
            </div>
            
            <h2>{movie.author}</h2>
            <h5>
              {movie.title}
            </h5>
            <p>{movie.publishedAt}</p>
            
        
            <a key={index} href={movie.url} target="_blank" >
            <button type="button" class="btn btn-light">
               More
             
            </button>
          </a>

          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Newstop;
