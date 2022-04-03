import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

import Movies from "./pages/Movies";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Nav />
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
