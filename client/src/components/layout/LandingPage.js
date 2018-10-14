import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="landing">
    <div className="dark-overlay landing-inner text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-3 mb-4">Table Tennis Application</h1>
            <p className="lead"> Add table tennis players and their matches</p>
            <hr />
            <Link to="/players" className="btn btn-lg btn-info mr-2">
              Players
            </Link>
            <Link to="/add-player" className="btn btn-lg btn-info mr-2">
              Add player
            </Link>
            <Link to="/matches" className="btn btn-lg btn-info mr-2">
              Matches
            </Link>
            <Link to="/add-match" className="btn btn-lg btn-info mr-2">
              Add match
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
