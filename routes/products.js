import express from "express";

let router = express.Router();

// Products
router.get("/", getProducts);
router.post("/");
router.put("");
router.delete("");

// Categories
router.get("/categories");
router.post("");
router.put("");
router.delete("");

// Discounts
router.get("/discounts");
router.post("");
router.put("");
router.delete("");

// Login
router.post("/auth/register", createLogin);
router.post("/auth/login", login);

export default router;
