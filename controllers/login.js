import passport from "passport";

export const login = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
});
