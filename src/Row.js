import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./Row.css";

function Row({ path, isLarge, title }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(path);
      setMovies(response.data.results);
    }
    getData();
  }, [path]);

  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} isLarge={isLarge} />
        ))}
      </div>
    </div>
  );
}

export default Row;
