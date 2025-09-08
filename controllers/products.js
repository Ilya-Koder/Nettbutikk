import { sequelize } from "../models/sequelize.js";

export async function getProducts(req, res, next) {
  const { id } = req.params;

  const [result, count] = await sequelize.query(
    `select * from t_Products where id = ${id}`
  );

  if (!result || count < 1) {
    return res.status(404).json({ error: "No matching data" });
  }
  res.status(200).json({ data: result[0] });
}
