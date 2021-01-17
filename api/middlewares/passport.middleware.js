const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const config = require("config");
const User = require("../models/UserModel");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.get("jwt_key"),
};

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        const user = await User.findOne({ where: { email: payload.email } });
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (e) {
        console.log("Middleware err", e);
      }
    })
  );
};
