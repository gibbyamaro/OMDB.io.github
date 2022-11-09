import React, { useEffect, useState } from "react";
import './App.css';
import Movielist from "./App2";
import Searchmovie from "./App3";

const App = () => {

  const[searchmovie, setSearchmovie] = useState('')
  const[movie, setMovie] = useState([])

  const Requestmovie = async()=>{
    const url = `https://www.omdbapi.com/?s=${searchmovie}&apikey=c14037a1`;
    const response = await fetch(url);
    const data = await response.json();
    if(data.Search){
    setMovie(data.Search);
    }
  }

  useEffect(() =>{
    Requestmovie(searchmovie);
  }, [searchmovie])



  return (
  <div className="container">   
    <h1 className="title">Film Finder</h1> 
    <br/>
    <div className="movieFinder">
      <Searchmovie searchmovie={searchmovie} setSearchmovie={setSearchmovie}/>
    </div>
    <Movielist className="movies" movie={movie}/>
  </div>
  )
  
}

export default App;