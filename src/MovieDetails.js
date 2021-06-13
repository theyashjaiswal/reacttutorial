// https://api.themoviedb.org/3/movie/691179?api_key=ac2d1eb88c2d8035bf85389fb0717bc7&language=en-US

import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "./ApiKey";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

function MovieDetails(props) {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  console.log(params);
  console.log(movie);

  const api_url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    //if [], run once when the row loads and don't run again
    async function fetchData() {
      await axios
        .get(api_url)
        .then((res) => {
          console.log("MOVIESINGLE" + JSON.stringify(res));
          setMovie(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, [api_url]);

  return (
    <div className="movie__box">
      <h1>MovieFlix 🎬</h1>
      <br></br>
      <img
        key={movie.id}
        className="row__poster"
        src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
        alt={movie.name}
      ></img>
      <br></br>
      <div className="movie__boxDetails">
        <h3>Title : {movie.original_title}</h3>
        <br></br>
        <h5>Description : {movie.overview}</h5>
        <br></br>
        <h5>Release Date : {movie.release_date}</h5>
        <br></br>
        <h5>Rating : {movie.vote_average}/10</h5>
        <br></br>
      </div>
    </div>
  );
}

export default MovieDetails;
