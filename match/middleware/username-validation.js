import { isEmpty } from "../../shared/utils";
import UserRepository from "../../user/data/user-repository";

export const checkUsernameExists = async (req, res, next) => {
  let errors = {};
  if (isEmpty(req.body.username1)) {
    errors.username1 = "Username field is required";
  }
  if (isEmpty(req.body.username2)) {
    errors.username2 = "Username field is required";
  }

  if (!isEmpty(errors)) {
    return res.status(400).send(errors);
  }

  try {
    const user1 = await UserRepository.findOne({
      username: req.body.username1
    });
    if (isEmpty(user1)) {
      errors.username1 = "User not found";
    }
    const user2 = await UserRepository.findOne({
      username: req.body.username2
    });
    if (isEmpty(user2)) {
      errors.username2 = "User not found";
    }
    if (!isEmpty(errors)) {
      return res.status(400).send(errors);
    }
    req.username1 = user1.username;
    req.username2 = user2.username;
    return next();
  } catch (err) {
    return next(err);
  }
};
