import React from "react";
import "./App.css";
import Nav from "./Nav";
import { endPoints } from "./request";
import Row from "./Row";

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="rows">
        <Row
          path={endPoints.netflixOriginals}
          title={"NETFLIX ORIGINALS"}
          isLarge
        />
        <Row path={endPoints.trendingNow} title={"Trending Now"} />
        <Row path={endPoints.topRated} title={"Top Rated"} />
        <Row path={endPoints.actionMovies} title={"Action Movies"} />
      </div>
    </div>
  );
}

export default App;
