import React from "react";
import { Link } from "react-router-dom";
const Lostpage = () => (
  <section className="lostpage is-centered">
    <h1>
      <Link to="/" className="link">
        404. Go home!
      </Link>
    </h1>
  </section>
);

export default Lostpage;
