import express from "express";
import productRouter from "./routes/products.js";
import authRouter from "./routes/auth.js";
import { sequelize } from "./models/sequelize.js";
import passport from "passport";
import "./strategy/local.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", productRouter);
app.use("/auth", authRouter);
app.use(passport.initialize());
app.use(passport.session());

await sequelize.sync();

export default app;
