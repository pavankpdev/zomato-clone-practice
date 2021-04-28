import express from "express";

// Database Modals
import { FoodModal } from "../../database/AllModals";

const Router = express.Router();

// @Route   GET /foods/r/:restaurant
// @des     get all foods associated with restaurant
// @access  PUBLIC
Router.get("/r/:restaurant", async (req, res) => {
  try {
    const { restaurant } = req.params;
    const allFoods = await FoodModal.find({ restaurant });
    return res.json({ foods: allFoods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   GET /foods/c/:category
// @des     get all foods associated with specified category
// @access  PUBLIC
Router.get("/c/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const allFoods = await FoodModal.find({ category });
    return res.json({ foods: allFoods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   GET /foods/c/:category
// @des     get all foods associated with specified category
// @access  PUBLIC
Router.get("/s/:search", async (req, res) => {
  try {
    const { search } = req.params;
    const allFoods = await FoodModal.find({
      name: { $regex: search, $options: "i" },
    });
    return res.json({ foods: allFoods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
