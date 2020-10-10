import React, { useEffect, useState } from "react";
import { imagePathPrefix } from "./request";
import "./Movie.css";

function Movie({ movie, isLarge }) {
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(
      imagePathPrefix + (isLarge ? movie.poster_path : movie.backdrop_path)
    );
  }, [movie, isLarge]);

  return (
    <img
      className={isLarge ? "image image__large" : "image"}
      src={path}
      alt="Movie Poster"
    />
  );
}

export default Movie;
