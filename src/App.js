import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";

import Movies from "./pages/Movies";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact element={<Movies />} />
          <Route path="/movies/tt0322259" element={<MovieInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
