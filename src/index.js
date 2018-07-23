import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";

//import Tests from "./components/testingconcepts";

//ReactDOM.render(<Tests />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
