import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { sequelize } from "../models/sequelize.js";

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
      const [[user]] = await sequelize.query(
        `select * from t_Users where Email = '${email}'`
      );
      console.log(user);
      if (!user || password !== user.Password) {
        return done(null, false, { message: "Incorrect email or password" });
      }
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  console.log(user, "serialisation");
  done(null, user.ID);
});

passport.deserializeUser(async (id, done) => {
  const [[user]] = await sequelize.query(
    `select * from t_Users where id = ${id}`
  );
  done(null, user);
});
