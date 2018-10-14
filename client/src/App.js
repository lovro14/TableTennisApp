import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LandingPage from "./components/layout/LandingPage";
import { Route, Switch } from "react-router-dom";
import AsyncComponent from "./hoc/asyncComponent/AsyncComponent";

const asyncPlayers = AsyncComponent(() => {
  return import("./components/Players/Players");
});

const asyncPlayer = AsyncComponent(() => {
  return import("./components/Player/Player");
});

const asyncAddPlayer = AsyncComponent(() => {
  return import("./components/AddPlayer/AddPlayer");
});

const asyncMatches = AsyncComponent(() => {
  return import("./components/Matches/Matches");
});

const asyncAddMatch = AsyncComponent(() => {
  return import("./components/AddMatch/AddMatch");
});

const asyncMatch = AsyncComponent(() => {
  return import("./components/Match/Match");
});

const asyncNotFound = AsyncComponent(() => {
  return import("./components/notFound/NotFound");
});

const asyncRankingBySets = AsyncComponent(() => {
  return import("./components/Rankings/RankingBySets/RankingBySets");
});

const asyncRankingByPoints = AsyncComponent(() => {
  return import("./components/Rankings/RankingByPoints/RankingByPoints");
});

const asyncRankingByWins = AsyncComponent(() => {
  return import("./components/Rankings/RankingByWins/RankingByWins");
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/players" component={asyncPlayers} />
          <Route exact path="/players/:playerId" component={asyncPlayer} />
          <Route exact path="/add-player" component={asyncAddPlayer} />
          <Route exact path="/matches" component={asyncMatches} />
          <Route exact path="/add-match" component={asyncAddMatch} />
          <Route exact path="/matches/:matchId" component={asyncMatch} />
          <Route exact path="/rankings/sets" component={asyncRankingBySets} />
          <Route exact path="/rankings/points" component={asyncRankingByPoints} />
          <Route exact path="/rankings/wins" component={asyncRankingByWins} />
          <Route path="*" component={asyncNotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
