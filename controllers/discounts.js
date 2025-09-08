import { sequelize } from "../models/sequelize.js";

// NOT FINISHED NEED DATABASE AND LOGIC
export async function getCategories(req, res, next) {
  const { id } = req.params;

  const [result, count] = await sequelize.query(
    `select * from t_Discounts where id = ${id}`
  );

  if (!result || count < 1) {
    return res.status(404).json({ error: "No matching data" });
  }
  res.status(200).json({ data: result[0] });
}
