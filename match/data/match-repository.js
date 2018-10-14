import Match from "./match";

class MatchRepository {
  constructor(Match) {
    this.Match = Match;
  }

  create(matchData) {
    return this.Match.create(matchData);
  }

  find(query) {
    return this.Match.findOne(query).lean(true);
  }

  get(query) {
    return this.Match.find(query).lean(true);
  }
}

export default new MatchRepository(Match);
