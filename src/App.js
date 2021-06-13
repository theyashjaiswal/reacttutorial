import "./App.css";
import { API_KEY } from "./ApiKey";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";
import { Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router";

function App() {
  const api_url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`;
  const history = useHistory();
  const goBackHandle = () => {
    history.goBack();
  };
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/movies/">Trending Movies</Link>
          </li>
        </ul>
      </nav>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <h1>
            {" "}
            Welcome!!!! to MovieFlix 🎬 😁😁 <br></br>Home Page
          </h1>
        </Route>
        <Route exact path="/movies">
          <Movies fetchUrl={api_url} />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
        <Route path="/about">
          <br></br>
          <br></br>
          <h1> This is the About section of MovieFlix 🎬 😁😁 </h1>
          <br></br>
          <br></br>
          <h4>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </h4>
        </Route>
        <Route>
          {" "}
          <h1> NOT FOUND!!!! </h1>
          <button onClick={goBackHandle}> Go back</button>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
