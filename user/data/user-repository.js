import User from "./user";

class UserRepository {
  constructor(User) {
    this.User = User;
  }

  findOne(query) {
    return this.User.findOne(query).lean(true);
  }

  create(user) {
    return this.User.create(user);
  }

  get(query) {
    return this.User.find(query, { username: 1, fullName: 1 }).lean(true);
  }

  findOnePopulate(query) {
    return this.User.findOne(query).populate({
      path: "matches",
      options: { lean: true }
    });
  }

  update(query, update, options) {
    return this.User.update(query, update, options);
  }

  getPopulate(query) {
    return this.User.find(query).populate({
      path: "matches",
      options: { lean: true }
    });
  }
}

export default new UserRepository(User);
