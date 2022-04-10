import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMasksTheater,
  faMagnifyingGlass,
  faArrowLeft,
  faStar,
  
} from "@fortawesome/free-solid-svg-icons";
library.add(faMasksTheater, faMagnifyingGlass, faArrowLeft, faStar);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<App/>);


// ReactDOM.render(
//   <App />,

//   document.getElementById("root")
// );
