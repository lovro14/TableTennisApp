export const calculateHead2Head = (req, res, next) => {
  let head2head = {};
  head2head[req.match.username1]=0;
  head2head[req.match.username2]=0
  head2head[req.match.winner] += 1;
  for (let i = 0; i < req.historyMatches.length; i++) {
    head2head[req.historyMatches[i].winner] += 1;
  }
  req.head2head = head2head;
  return next();
};
