import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

console.log(
  "Test",
  process.env.dialect,
  process.env.DB_username,
  process.env.host
);

export const sequelize = new Sequelize(
  process.env.database,
  process.env.DB_username,
  process.env.DB_password,

  {
    dialect: process.env.dialect,

    host: process.env.host,
    port: process.env.port,
    dialectOptions: {
      instanceName: "SQLEXPRESS",
      encrypt: false,
      trustServerCertificate: true,
    },
  }
);
