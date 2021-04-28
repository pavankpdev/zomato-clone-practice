// Libraries
import express from "express";
import passport from "passport";

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

// @Route   POST /foods/new
// @des     add new food record to database
// @access  PRIVATE
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
  try {
    const { foodData } = req.body;
    const newFood = await FoodModal.create(foodData);
    return res.json({ foods: newFood });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   PATCH /foods/update
// @des     update exisiitng food data
// @access  PRIVATE
Router.patch("/update", passport.authenticate("jwt"), async (req, res) => {
  try {
    const { foodData } = req.body;
    const updateFood = await FoodModal.findByIdAndUpdate(
      foodData._id,
      {
        $set: foodData,
      },
      { new: true }
    );

    if (!updateFood)
      return res.status(404).json({ foods: "Food record Not Found!!!" });

    return res.json({ foods: updateFood });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   DELETE /foods/delete
// @des     delete exisiitng food data
// @access  PRIVATE
Router.delete("/delete", passport.authenticate("jwt"), async (req, res) => {
  try {
    const { foodData } = req.body;
    const deleteFood = await FoodModal.findByIdAndRemove(foodData._id);

    return res.json({ foods: Boolean(deleteFood) });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
