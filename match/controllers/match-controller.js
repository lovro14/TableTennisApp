import repository from "../data/match-repository";
import { isEmpty } from "../../shared/utils";

class MatchController {
  constructor(repository) {
    this.repository = repository;
    this.createNewMatch = this.createNewMatch.bind(this);
    this.getMatches = this.getMatches.bind(this);
    this.getMatch = this.getMatch.bind(this);
    this.getEnrolledUsersMatches = this.getEnrolledUsersMatches.bind(this);
  }

  async createNewMatch(req, res, next) {
    try {
      const match = await this.repository.create(req.matchData);
      req.matchId = match._id;
      return next();
    } catch (err) {
      return next(err);
    }
  }

  async getMatches(req, res, next) {
    try {
      req.matches = await this.repository.get({});
      return next();
    } catch (err) {
      return next(err);
    }
  }

  async getMatch(req, res, next) {
    try {
      req.match = await this.repository.find({ _id: req.params.matchId });
      return isEmpty(req.match)
        ? res.status(403).send({ message: "Not Found" })
        : next();
    } catch (err) {
      return next(err);
    }
  }

  async getEnrolledUsersMatches(req, res, next) {
    try {
      const enrolledUsername1 = req.match.username1;
      const enrolledUsername2 = req.match.username2;
      req.historyMatches = await this.repository.get({
        $and: [
          {
            $or: [
              {
                $and: [
                  { username1: enrolledUsername1, username2: enrolledUsername2 }
                ]
              },
              {
                $and: [
                  { username1: enrolledUsername2, username2: enrolledUsername1 }
                ]
              }
            ]
          },
          {
            _id: { $ne: req.match._id }
          }
        ]
      });
      return next();
    } catch (err) {
      return next(err);
    }
  }
}

export default new MatchController(repository);
