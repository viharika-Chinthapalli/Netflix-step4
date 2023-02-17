import "./Banner.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../request";

const Banner = () => {
  const [film, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${film?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
      >

      <div className="banner__contents">
        <h1 className="banner__title">
          {film?.title || film?.name || film?.original_name}
        </h1>
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
        <h1 className="banner__description">
          {truncate(film?.overview, 200)}
        </h1>
      </div>

      <div className="banner__fadeBottom"></div>
    </header>
  );
};

export default Banner;
