import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getProducts } from "../controllers/products.js";

let router = express.Router();

// Products
router.get("/products", isAuthenticated, getProducts);
// router.post("/");
// router.put("");
// router.delete("");

// // Categories
// router.get("/categories", isAuthenticated);
// router.post("");
// router.put("");
// router.delete("");

// // Discounts
// router.get("/discounts");
// router.post("");
// router.put("");
// router.delete("");

export default router;
