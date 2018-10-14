import express from "express";
import { userRouter } from "../user";
import { matchRouter } from "../match";

export const router = new express.Router();

export const initializeRoutes = app => {
  router.use("/api/users", userRouter);
  router.use("/api/matches", matchRouter);
  app.use(router);
  app.use((req, res, next) => {
    res.status(404).send({ message: "Not found any appropriate route" });
  });
};
