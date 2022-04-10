import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";

import Movies from "./pages/Movies";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         
          <Route path="/" exact element={<Home/>} />
          <Route path="/movies" exact element={<Movies />} />
          <Route path="/movies/:id" element={<MovieInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
