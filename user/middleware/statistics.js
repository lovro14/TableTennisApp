export const calculateUserStatistics = (req, res, next) => {
  const { _id, username, fullName, matches } = req.user;
  const numberOfMatches = matches.length;
  let numberOfWins = 0;
  let setWins = 0;
  let setPlayed = 0;
  let pointsPlayed = 0;
  let pointsWon = 0;
  let isFirstPlayer;
  for (let i = 0; i < matches.length; i++) {
    isFirstPlayer = matches[i].username1 === username ? true : false;
    matches[i].winner === username ? (numberOfWins += 1) : null;
    setPlayed += matches[i].sets.length;
    for (let j = 0; j < matches[i].sets.length; j++) {
      pointsPlayed =
        pointsPlayed + matches[i].sets[j].user1 + matches[i].sets[j].user2;
      pointsWon += isFirstPlayer
        ? matches[i].sets[j].user1
        : matches[i].sets[j].user2;
      if (isFirstPlayer) {
        matches[i].sets[j].user1 > matches[i].sets[j].user2
          ? (setWins += 1)
          : null;
      } else {
        matches[i].sets[j].user2 > matches[i].sets[j].user1
          ? (setWins += 1)
          : null;
      }
    }
  }

  req.userStatistics = {
    userId: _id,
    username: username,
    fullName: fullName,
    numberOfMatches: numberOfMatches,
    numberOfWins: numberOfWins,
    numberOfLostMatches: numberOfMatches - numberOfWins,
    setPlayed: setPlayed,
    setWins: setWins,
    setLost: setPlayed - setWins,
    pointsPlayed: pointsPlayed,
    pointsWon: pointsWon,
    pointsLost: pointsPlayed - pointsWon
  };
  return next();
};
