import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import axios from "axios";
import "./Movies.css";

function Movies(props) {
  const [moviesList, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  console.log("history", history);
  console.log("location", location);
  console.log("match", match);

  useEffect(() => {
    //if [], run once when the row loads and don't run again
    async function fetchData() {
      await axios
        .get(props.fetchUrl)
        .then((res) => {
          console.table("RESULTSMOVIES", JSON.stringify(res));
          console.log("RESULTSMOVIES", JSON.stringify(res));
          setMovies(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, [props.fetchUrl]);

  async function handleClick(id) {
    console.log(id);
    history.push("/movies/" + id);
  }

  return (
    <div className="row">
      <h1>MovieFlix 🎬</h1>
      <br></br>
      <h2>Trending Movies</h2>
      <div className="row__posters">
        {moviesList.map((r) => (
          <img
            key={r.id}
            className="row__poster"
            src={"https://image.tmdb.org/t/p/original/" + r.poster_path}
            alt={r.name}
            onClick={() => handleClick(r.id)}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Movies;
