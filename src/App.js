import React from "react";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "components/navigation";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Routes />
      </Router>
    </div>
  );
}

export default App;
