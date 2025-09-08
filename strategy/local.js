import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { sequelize } from "../models/sequelize";

export default passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      if (!email || !password) {
        return done(null, false, { message: "Email or password not valid" });
      }
      const user = sequelize.query(
        `select * from t_user where usernameField = ${usernameField}`
      );
      if (!user || password !== user.password) {
        res.status(401).json({ data: "Incorrect email or password" });
      }
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {});
