import express from "express";

// Database Modals
import { FoodModal } from "../../database/AllModals";

const Router = express.Router();

Router.get("/", async (req, res) => {
  try {
    const allFoods = await FoodModal.find();
    return res.json({ foods: allFoods });
  } catch (error) {
    throw new Error(error);
  }
});

export default Router;
