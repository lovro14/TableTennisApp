import { isEmpty } from "../../shared/utils";
import UserRepository from "../data/user-repository";
import mongoose from "mongoose";

export const userDataValidation = (req, res, next) => {
  let data = req.body;
  let errors = {};

  if (isEmpty(data.username)) {
    errors.username = "Username field is required";
  }

  if (isEmpty(data.fullName)) {
    errors.fullName = "Full Name field is required";
  }

  return isEmpty(errors) ? next() : res.status(400).send(errors);
};

export const checkUsername = async (req, res, next) => {
  try {
    const existingUser = await UserRepository.findOne({
      username: req.body.username
    });
    return isEmpty(existingUser)
      ? next()
      : res.status(400).send({ username: "User already exists" });
  } catch (err) {
    return next(err);
  }
};

export const validateUserId = (req, res, next) => {
  return mongoose.Types.ObjectId.isValid(req.params.userId)
    ? next()
    : res.status(400).send({ message: "Bad Request" });
};
