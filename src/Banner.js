import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import { endPoints, imagePathPrefix } from "./request";

function Banner() {
  const [movieUrl, setMovieUrl] = useState("");
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(endPoints.netflixOriginals);
      const movies = response.data.results;
      const _movie = movies[Math.floor(Math.random() * movies.length)];
      setMovie(_movie);
      setMovieUrl(imagePathPrefix + _movie.backdrop_path);
      console.log(_movie);
    }
    getData();
  }, []);

  const bannerBackground = {
    backgroundSize: "cover",
    backgroundImage: `url(${movieUrl})`,
    backgroundPosition: "center center",
  };

  return (
    <header style={bannerBackground} className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">{movie?.overview}</div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
