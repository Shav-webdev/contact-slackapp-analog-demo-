module.exports.checkSession = (req, res, next) => {
  res.locals.isAuth = req.session.isAuthenticated;
  next();
};

module.exports.auth = (req, res, next) => {
  if (!req.session.isAuthenticated) {
    return res.redact("/");
  }
  next();
};
