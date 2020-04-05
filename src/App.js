import React, { useEffect, useState } from "react";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/navigation/";
import Loader from "./components/loader/Loader";
import ScrollToTop from "./components/scrollToTop/scrollToTop";

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
        <ScrollToTop>
          <Navigation />
          <Routes />
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default App;
