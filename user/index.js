import express from "express";
import UserController from "./controllers/user-controller";
import {
  createUserResponse,
  getUsersResponse,
  getUserResponse,
  getUsersRankResponse
} from "./middleware/response";
import {
  userDataValidation,
  checkUsername,
  validateUserId
} from "./middleware/user-validation";
import { calculateUserStatistics } from "./middleware/statistics";
import {
  sortUsersByWonSets,
  sortUsersByWonPoints,
  sortUsersByWins
} from "./middleware/sort-users";

export const userRouter = new express.Router();

userRouter.post(
  "/",
  userDataValidation,
  checkUsername,
  UserController.createUser,
  createUserResponse
);

userRouter.get("/", UserController.getUsers, getUsersResponse);

userRouter.get(
  "/sets",
  UserController.getUserMatches,
  sortUsersByWonSets,
  getUsersRankResponse
);

userRouter.get(
  "/points",
  UserController.getUserMatches,
  sortUsersByWonPoints,
  getUsersRankResponse
);

userRouter.get(
  "/wins",
  UserController.getUserMatches,
  sortUsersByWins,
  getUsersRankResponse
);

userRouter.get(
  "/:userId",
  validateUserId,
  UserController.getUser,
  calculateUserStatistics,
  getUserResponse
);
