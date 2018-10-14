export const newMatchResponse = (req, res, next) => {
  res.status(200).send({ message: "Match saved" });
};

export const getMatchesResponse = (req, res, next) => {
  res.status(200).send(req.matches);
};

export const getMatchAndHistoryMatchesReponse = (req, res, next) => {
  res
    .status(200)
    .send({
      match: req.match,
      historyMatches: req.historyMatches,
      headToHead: req.head2head
    });
};
