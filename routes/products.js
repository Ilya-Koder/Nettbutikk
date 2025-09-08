import express from "express";

let router = express.Router();

router.get("/", getProducts);

// Products
router.post("/");
router.put("");
router.delete("");

// Categories
router.get("/categories");

export default router;
