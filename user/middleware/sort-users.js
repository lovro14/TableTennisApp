export const sortUsersByWonSets = (req, res, next) => {
  let userSetWon = {};
  let isFirstPlayer;
  let setsWon = 0;
  for (let k = 0; k < req.users.length; k++) {
    const { matches, username, fullName, _id } = req.users[k];
    userSetWon[req.users[k]] = {
      _id: _id,
      username: username,
      fullName: fullName
    };
    setsWon = 0;
    for (let i = 0; i < matches.length; i++) {
      isFirstPlayer = matches[i].username1 === username ? true : false;
      for (let j = 0; j < matches[i].sets.length; j++) {
        if (isFirstPlayer) {
          matches[i].sets[j].user1 > matches[i].sets[j].user2
            ? (setsWon += 1)
            : null;
        } else {
          matches[i].sets[j].user2 > matches[i].sets[j].user1
            ? (setsWon += 1)
            : null;
        }
      }
    }
    userSetWon[req.users[k]].setsWon = setsWon;
  }

  const values = Object.values(userSetWon);
  req.sortedUsers = values.sort(function(obj1, obj2) {
    return obj1.setsWon > obj2.setsWon
      ? -1
      : obj2.setsWon > obj1.setsWon
        ? 1
        : 0;
  });
  return next();
};

export const sortUsersByWonPoints = (req, res, next) => {
  let userPointsWon = {};
  let isFirstPlayer;
  let pointsWon = 0;
  for (let k = 0; k < req.users.length; k++) {
    const { matches, username, fullName, _id } = req.users[k];
    userPointsWon[req.users[k]] = {
      _id: _id,
      username: username,
      fullName: fullName
    };
    pointsWon = 0;
    for (let i = 0; i < matches.length; i++) {
      isFirstPlayer = matches[i].username1 === username ? true : false;
      for (let j = 0; j < matches[i].sets.length; j++) {
        pointsWon += isFirstPlayer
          ? matches[i].sets[j].user1
          : matches[i].sets[j].user2;
      }
    }
    userPointsWon[req.users[k]].pointsWon = pointsWon;
  }

  const values = Object.values(userPointsWon);
  req.sortedUsers = values.sort(function(obj1, obj2) {
    return obj1.pointsWon > obj2.pointsWon
      ? -1
      : obj2.pointsWon > obj1.pointsWon
        ? 1
        : 0;
  });
  return next();
};

export const sortUsersByWins = (req, res, next) => {
  let userWins = {};
  let wins = 0;
  for (let k = 0; k < req.users.length; k++) {
    const { matches, username, fullName, _id } = req.users[k];
    userWins[req.users[k]] = {
      _id: _id,
      username: username,
      fullName: fullName
    };
    wins = 0;
    for (let i = 0; i < matches.length; i++) {
      matches[i].winner === username ? (wins += 1) : null;
    }
    userWins[req.users[k]].wins = wins;
  }

  const values = Object.values(userWins);
  req.sortedUsers = values.sort(function(obj1, obj2) {
    return obj1.wins > obj2.wins ? -1 : obj2.wins > obj1.wins ? 1 : 0;
  });
  return next();
};
