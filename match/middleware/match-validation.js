import { isEmpty } from "../../shared/utils";
import validator from "validator";
import {
  MIN_POINTS_SET,
  MIN_POINTS_TO_WIN_SET,
  EXTENDED_SET_POINT_DIFF,
  NUM_SET_TO_WIN
} from "../../shared/constants";
import mongoose from "mongoose";

export const validateMatchData = (req, res, next) => {
  //Check first 3 sets
  let errors = {};
  let errorsSet1 = {};
  let errorsSet2 = {};
  let errorsSet3 = {};
  let data = req.body;
  let user1WonSets = 0;
  let user2WonSets = 0;
  let set1 = {};
  let set2 = {};
  let set3 = {};

  if (isEmpty(data.user1set1)) {
    errorsSet1.user1set1 = "Required";
  } else if (!validator.isInt(data.user1set1)) {
    errorsSet1.user1set1 = "Insert integer";
  } else if (parseInt(data.user1set1) < MIN_POINTS_SET) {
    errorsSet1.user1set1 = "Required >= 0";
  }

  if (isEmpty(data.user2set1)) {
    errorsSet1.user2set1 = "Required";
  } else if (!validator.isInt(data.user2set1)) {
    errorsSet1.user2set1 = "Insert integer";
  } else if (parseInt(data.user2set1) < MIN_POINTS_SET) {
    errorsSet1.user2set1 = "Required >= 0";
  }

  //Set 1 score validation
  if (isEmpty(errorsSet1)) {
    const user1set1 = parseInt(data.user1set1);
    const user2set1 = parseInt(data.user2set1);

    //9-5 case
    if (
      user1set1 < MIN_POINTS_TO_WIN_SET &&
      user2set1 < MIN_POINTS_TO_WIN_SET
    ) {
      errorsSet1.set1 = "Set not finished";
    }
    //12-11 case
    else if (
      user1set1 >= MIN_POINTS_TO_WIN_SET - 1 &&
      user2set1 >= MIN_POINTS_TO_WIN_SET - 1 &&
      Math.abs(user1set1 - user2set1) != EXTENDED_SET_POINT_DIFF
    ) {
      errorsSet1.set1 = `Difference has to be ${EXTENDED_SET_POINT_DIFF}`;
    }
    //14-9 case
    else if (
      (user1set1 > MIN_POINTS_TO_WIN_SET &&
        user2set1 <= MIN_POINTS_TO_WIN_SET - 2) ||
      (user2set1 > MIN_POINTS_TO_WIN_SET &&
        user1set1 <= MIN_POINTS_TO_WIN_SET - 2)
    ) {
      errorsSet1.set1 = "Set not valid";
    } else {
      if (user1set1 > user2set1) {
        user1WonSets += 1;
      } else {
        user2WonSets += 1;
      }
      set1 = {
        user1: user1set1,
        user2: user2set1
      };
    }
  }

  if (isEmpty(data.user1set2)) {
    errorsSet2.user1set2 = "Required";
  } else if (!validator.isInt(data.user1set2)) {
    errorsSet2.user1set2 = "Insert integer";
  } else if (parseInt(data.user1set2) < MIN_POINTS_SET) {
    errorsSet2.user1set2 = "Required >= 0";
  }

  if (isEmpty(data.user2set2)) {
    errorsSet2.user2set2 = "Required";
  } else if (!validator.isInt(data.user2set2)) {
    errorsSet2.user2set2 = "Insert integer";
  } else if (parseInt(data.user2set2) < MIN_POINTS_SET) {
    errorsSet2.user2set2 = "Required >= 0";
  }

  //Set 2 score validation
  if (isEmpty(errorsSet2)) {
    const user1set2 = parseInt(data.user1set2);
    const user2set2 = parseInt(data.user2set2);
    //9-5 case
    if (
      user1set2 < MIN_POINTS_TO_WIN_SET &&
      user2set2 < MIN_POINTS_TO_WIN_SET
    ) {
      errorsSet2.set2 = "Set not finished";
    }
    //12-11 case
    else if (
      user1set2 >= MIN_POINTS_TO_WIN_SET - 1 &&
      user2set2 >= MIN_POINTS_TO_WIN_SET - 1 &&
      Math.abs(user1set2 - user2set2) != EXTENDED_SET_POINT_DIFF
    ) {
      errorsSet2.set2 = `Difference has to be ${EXTENDED_SET_POINT_DIFF}`;
    }
    //14-9 case
    else if (
      (user1set2 > MIN_POINTS_TO_WIN_SET &&
        user2set2 <= MIN_POINTS_TO_WIN_SET - 2) ||
      (user2set2 > MIN_POINTS_TO_WIN_SET &&
        user1set2 <= MIN_POINTS_TO_WIN_SET - 2)
    ) {
      errorsSet2.set2 = "Set not valid";
    } else {
      if (user1set2 > user2set2) {
        user1WonSets += 1;
      } else {
        user2WonSets += 1;
      }
      set2 = {
        user1: user1set2,
        user2: user2set2
      };
    }
  }

  if (isEmpty(data.user1set3)) {
    errorsSet3.user1set3 = "Required";
  } else if (!validator.isInt(data.user1set3)) {
    errorsSet3.user1set3 = "Insert integer";
  } else if (parseInt(data.user1set3) < MIN_POINTS_SET) {
    errorsSet3.user1set3 = "Required >= 0";
  }

  if (isEmpty(data.user2set3)) {
    errorsSet3.user2set3 = "Required";
  } else if (!validator.isInt(data.user2set3)) {
    errorsSet3.user2set3 = "Insert integer";
  } else if (parseInt(data.user2set3) < MIN_POINTS_SET) {
    errorsSet3.user2set3 = "Required >= 0";
  }

  if (isEmpty(errorsSet3)) {
    //Set 3 score validation
    const user1set3 = parseInt(data.user1set3);
    const user2set3 = parseInt(data.user2set3);

    //9-5 case
    if (
      user1set3 < MIN_POINTS_TO_WIN_SET &&
      user2set3 < MIN_POINTS_TO_WIN_SET
    ) {
      errorsSet3.set3 = "Set not finished";
    }
    //12-11 case
    else if (
      user1set3 >= MIN_POINTS_TO_WIN_SET - 1 &&
      user2set3 >= MIN_POINTS_TO_WIN_SET - 1 &&
      Math.abs(user1set3 - user2set3) != EXTENDED_SET_POINT_DIFF
    ) {
      errorsSet3.set3 = `Difference has to be ${EXTENDED_SET_POINT_DIFF}`;
    }
    //14-9 case
    else if (
      (user1set3 > MIN_POINTS_TO_WIN_SET &&
        user2set3 <= MIN_POINTS_TO_WIN_SET - 2) ||
      (user2set3 > MIN_POINTS_TO_WIN_SET &&
        user1set3 <= MIN_POINTS_TO_WIN_SET - 2)
    ) {
      errorsSet3.set3 = "Set not valid";
    } else {
      if (user1set3 > user2set3) {
        user1WonSets += 1;
      } else {
        user2WonSets += 1;
      }
      set3 = {
        user1: user1set3,
        user2: user2set3
      };
    }
  }

  errors = catObjects([errorsSet1, errorsSet2, errorsSet3]);
  if (!isEmpty(errors)) {
    return res.status(400).send(errors);
  }

  if (
    (user1WonSets === NUM_SET_TO_WIN || user2WonSets === NUM_SET_TO_WIN) &&
    (!isEmpty(data.user1set4) ||
      !isEmpty(data.user2set4) ||
      !isEmpty(data.user1set5) ||
      !isEmpty(data.user2set5))
  ) {
    errors.match = "Match is finish, please delete data for sets after set 3";
  } else if (
    user1WonSets === NUM_SET_TO_WIN ||
    user2WonSets === NUM_SET_TO_WIN
  ) {
    //Match is finished in 3 sets
    req.matchData = {
      username1: req.username1,
      username2: req.username2,
      sets: [set1, set2, set3]
    };
    req.matchData.winner =
      user1WonSets === NUM_SET_TO_WIN ? req.username1 : req.username2;
    return next();
  }

  let set4 = {};
  let errorsSet4 = {};
  if (isEmpty(data.user1set4)) {
    errorsSet4.user1set4 = "Required";
  } else if (!validator.isInt(data.user1set4)) {
    errorsSet4.user1set4 = "Insert integer";
  } else if (parseInt(data.user1set4) < MIN_POINTS_SET) {
    errorsSet4.user1set4 = "Required >= 0";
  }

  if (isEmpty(data.user2set4)) {
    errorsSet4.user2set4 = "Required";
  } else if (!validator.isInt(data.user2set4)) {
    errorsSet4.user2set4 = "Insert integer";
  } else if (parseInt(data.user2set4) < MIN_POINTS_SET) {
    errorsSet4.user2set3 = "Required >= 0";
  }

  if (isEmpty(errorsSet4)) {
    //Set 4 score validation
    const user1set4 = parseInt(data.user1set4);
    const user2set4 = parseInt(data.user2set4);

    //9-5 case
    if (
      user1set4 < MIN_POINTS_TO_WIN_SET &&
      user2set4 < MIN_POINTS_TO_WIN_SET
    ) {
      errorsSet4.set4 = "Set not finished";
    }
    //12-11 case
    else if (
      user1set4 >= MIN_POINTS_TO_WIN_SET - 1 &&
      user2set4 >= MIN_POINTS_TO_WIN_SET - 1 &&
      Math.abs(user1set4 - user2set4) != EXTENDED_SET_POINT_DIFF
    ) {
      errorsSet4.set4 = `Difference has to be ${EXTENDED_SET_POINT_DIFF}`;
    }
    //14-9 case
    else if (
      (user1set4 > MIN_POINTS_TO_WIN_SET &&
        user2set4 <= MIN_POINTS_TO_WIN_SET - 2) ||
      (user2set4 > MIN_POINTS_TO_WIN_SET &&
        user1set4 <= MIN_POINTS_TO_WIN_SET - 2)
    ) {
      errorsSet4.set4 = "Set not valid";
    } else {
      if (user1set4 > user2set4) {
        user1WonSets += 1;
      } else {
        user2WonSets += 1;
      }
      set4 = {
        user1: user1set4,
        user2: user2set4
      };
    }
  }

  if (
    (user1WonSets === NUM_SET_TO_WIN || user2WonSets === NUM_SET_TO_WIN) &&
    (!isEmpty(data.user1set5) || !isEmpty(data.user2set5))
  ) {
    errorsSet4.match =
      "Match is finish, please delete data for sets after set 4";
  } else if (
    user1WonSets === NUM_SET_TO_WIN ||
    user2WonSets === NUM_SET_TO_WIN
  ) {
    //Match is finished in 4 sets
    req.matchData = {
      username1: req.username1,
      username2: req.username2,
      sets: [set1, set2, set3, set4]
    };
    req.matchData.winner =
      user1WonSets === NUM_SET_TO_WIN ? req.username1 : req.username2;
    return next();
  }

  errors = catObjects([errorsSet1, errorsSet2, errorsSet3, errorsSet4]);
  if (!isEmpty(errors)) {
    return res.status(400).send(errors);
  }

  let set5 = {};
  let errorsSet5 = {};
  if (isEmpty(data.user1set5)) {
    errorsSet5.user1set5 = "Required";
  } else if (!validator.isInt(data.user1set5)) {
    errorsSet5.user1set5 = "Insert integer";
  } else if (parseInt(data.user1set5) < MIN_POINTS_SET) {
    errorsSet5.user1set5 = "Required >= 0";
  }

  if (isEmpty(data.user2set5)) {
    errorsSet5.user2set5 = "Required";
  } else if (!validator.isInt(data.user2set5)) {
    errorsSet5.user2set5 = "Insert integer";
  } else if (parseInt(data.user2set5) < MIN_POINTS_SET) {
    errorsSet5.user2set3 = "Required >= 0";
  }

  if (isEmpty(errorsSet5)) {
    //Set 5 score validation
    const user1set5 = parseInt(data.user1set5);
    const user2set5 = parseInt(data.user2set5);

    //9-5 case
    if (
      user1set5 < MIN_POINTS_TO_WIN_SET &&
      user2set5 < MIN_POINTS_TO_WIN_SET
    ) {
      errorsSet5.set5 = "Set not finished";
    }
    //12-11 case
    else if (
      user1set5 >= MIN_POINTS_TO_WIN_SET - 1 &&
      user2set5 >= MIN_POINTS_TO_WIN_SET - 1 &&
      Math.abs(user1set5 - user2set5) != EXTENDED_SET_POINT_DIFF
    ) {
      errorsSet5.set5 = `Difference has to be ${EXTENDED_SET_POINT_DIFF}`;
    }
    //14-9 case
    else if (
      (user1set5 > MIN_POINTS_TO_WIN_SET &&
        user2set5 <= MIN_POINTS_TO_WIN_SET - 2) ||
      (user2set5 > MIN_POINTS_TO_WIN_SET &&
        user1set5 <= MIN_POINTS_TO_WIN_SET - 2)
    ) {
      errorsSet5.set5 = "Set not valid";
    } else {
      if (user1set5 > user2set5) {
        user1WonSets += 1;
      } else {
        user2WonSets += 1;
      }
      set5 = {
        user1: user1set5,
        user2: user2set5
      };
    }
  }

  errors = catObjects([
    errorsSet1,
    errorsSet2,
    errorsSet3,
    errorsSet4,
    errorsSet5
  ]);
  if (!isEmpty(errors)) {
    return res.status(400).send(errors);
  }
  if (isEmpty(errors)) {
    req.matchData = {
      username1: req.username1,
      username2: req.username2,
      sets: [set1, set2, set3, set4, set5]
    };
    req.matchData.winner =
      user1WonSets === NUM_SET_TO_WIN ? req.username1 : req.username2;
    return next();
  } else {
    return res.status(400).send(errors);
  }
};

const catObjects = array => {
  if (array.length === 0) {
    return {};
  }
  let obj = array.pop();
  return Object.assign(obj, catObjects(array));
};

export const validateMatchId = (req, res, next) => {
  return mongoose.Types.ObjectId.isValid(req.params.matchId)
    ? next()
    : res.status(400).send({ message: "Bad Request" });
};
