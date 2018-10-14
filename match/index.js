import express from "express";
import { checkUsernameExists } from "./middleware/username-validation";
import {
  validateMatchData,
  validateMatchId
} from "./middleware/match-validation";
import {
  newMatchResponse,
  getMatchesResponse,
  getMatchAndHistoryMatchesReponse
} from "./middleware/response";
import {calculateHead2Head} from './middleware/head2head';
import MatchController from "./controllers/match-controller";
import UserController from "../user/controllers/user-controller";

export const matchRouter = new express.Router();

matchRouter.post(
  "/",
  checkUsernameExists,
  validateMatchData,
  MatchController.createNewMatch,
  UserController.addMatches,
  newMatchResponse
);

matchRouter.get("/", MatchController.getMatches, getMatchesResponse);

matchRouter.get(
  "/:matchId",
  validateMatchId,
  MatchController.getMatch,
  MatchController.getEnrolledUsersMatches,
  calculateHead2Head,
  getMatchAndHistoryMatchesReponse
);

