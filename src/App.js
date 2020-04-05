import React, { useEffect, useState } from "react";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/navigation/";
import Loader from "./components/loader/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return loading ? (
    <Loader />
  ) : (
    <div className="App">
      <Router>
        <Navigation />
        <Routes />
      </Router>
    </div>
  );
};

export default App;
