var HttpError = require('../error').HttpError;

module.exports = function(req, res, next) {
  if (!req.session || !req.session.user) {
    return next(new HttpError(401, "You aren't authorized"));
  }
  next();
};