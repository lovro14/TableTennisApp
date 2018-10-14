import repository from "../data/user-repository";
import { isEmpty } from "../../shared/utils";

class UserController {
  constructor(repository) {
    this.repository = repository;
    this.createUser = this.createUser.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.getUser = this.getUser.bind(this);
    this.addMatches = this.addMatches.bind(this);
    this.getUserMatches = this.getUserMatches.bind(this);
  }

  async createUser(req, res, next) {
    try {
      const userData = {
        username: req.body.username,
        fullName: req.body.fullName
      };
      req.user = await this.repository.create(userData);
      return next();
    } catch (err) {
      return next(err);
    }
  }

  async getUsers(req, res, next) {
    try {
      req.users = await this.repository.get({});
      return next();
    } catch (err) {
      return next(err);
    }
  }

  async getUser(req, res, next) {
    try {
      req.user = await this.repository.findOnePopulate({
        _id: req.params.userId
      });
      return isEmpty(req.user)
        ? res.status(403).send({ message: "Not Found" })
        : next();
    } catch (err) {
      return next(err);
    }
  }

  async addMatches(req, res, next) {
    try {
      await this.repository.update(
        {
          username: { $in: [req.username1, req.username2] }
        },
        {
          $push: { matches: req.matchId }
        },
        {
          multi: true
        }
      );
      return next();
    } catch (err) {
      return next(err);
    }
  }

  async getUserMatches(req, res, next) {
    try {
      req.users = await this.repository.getPopulate({});
      return next();
    } catch (err) {
      return next(err);
    }
  }
}

export default new UserController(repository);
