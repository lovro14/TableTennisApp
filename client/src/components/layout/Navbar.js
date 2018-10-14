import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div className="container">
      <Link className="navbar-brand" to="/">
        Table Tennis App
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mobile-nav"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/players">
              Players
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-player">
              Add Player
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/matches">
              Matches
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add-match">
              Add Match
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/rankings/sets">
              Set Ranking
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/rankings/points">
              Point Ranking
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/rankings/wins">
              Win Ranking
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
