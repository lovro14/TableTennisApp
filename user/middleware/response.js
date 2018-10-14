export const createUserResponse = (req, res, next) => {
  res
    .status(200)
    .send({
      _id: req.user._id,
      username: req.user.username,
      fullName: req.user.fullName
    });
};

export const getUsersResponse = (req, res, next) => {
  res.status(200).send(req.users);
};

export const getUserResponse = (req, res, next) => {
  res.status(200).send(req.userStatistics);
};

export const getUsersRankResponse = (req, res, next) => {
  res.status(200).send(req.sortedUsers);
};
