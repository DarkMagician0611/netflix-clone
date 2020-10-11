import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import { endPoints, imagePathPrefix } from "./request";

function Banner() {
  const [movieUrl, setMovieUrl] = useState("");

  async function getData() {
    const response = await axios.get(endPoints.netflixOriginals);
    const movies = response.data.results;
    const movie = movies[Math.floor(Math.random() * movies.length)];
    setMovieUrl(imagePathPrefix + movie.backdrop_path);
  }

  useEffect(() => {
    getData();
  }, []);

  const bannerBackground = {
    backgroundSize: "cover",
    backgroundImage: `url(${movieUrl})`,
    backgroundPosition: "center center",
  };

  return (
    <header style={bannerBackground} className="banner">
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
