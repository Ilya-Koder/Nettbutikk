import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import productRouter from "./routes/products.js";
import authRouter from "./routes/auth.js";
import { sequelize } from "./models/sequelize.js";
import passport from "passport";
import "./strategy/local.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
app.use(
  session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/products", productRouter);
app.use("/auth", authRouter);
app.use("/", (req, res, next) => {
  res.status(200).json({ message: req.user });
});

await sequelize.sync();

export default app;
