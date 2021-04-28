// Libraries
import express from "express";
import passport from "passport";

// Database Modals
import { RestaurantModal } from "../../database/AllModals";

const Router = express.Router();

// @Route   GET /restaurants/
// @des     GEt all restaurant of a particular city
// @access  PUBLIC
Router.get("/", async (req, res) => {
  try {
    const city = req.query.city;
    const allRestaurants = await RestaurantModal.find({
      city: city || "Bangalore",
    });
    return res.json({ restaurants: allRestaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   GET /restaurants/s/:search
// @des     GEt restaurants by the search string
// @access  PUBLIC
Router.get("/s/:search", async (req, res) => {
  try {
    const { search } = req.params;
    const allRestaurants = await RestaurantModal.find({
      name: { $regex: search, $options: "i" },
    });
    return res.json({ restaurants: allRestaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   POST /restaurants/new
// @des     add new restaurant
// @access  PRIVATE
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
  try {
    const newRetaurant = await RestaurantModal.create(req.body.retaurantData);
    return res.json({ restaurants: newRetaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   PATCH /restaurants/update
// @des     update exisitng restaurant data
// @access  PRIVATE
Router.patch("/update", passport.authenticate("jwt"), async (req, res) => {
  try {
    const updatedRestaurant = await RestaurantModal.findByIdAndUpdate(
      req.body.retaurantData._id,
      { $set: req.body.retaurantData },
      { new: true }
    );
    if (!updatedRestaurant)
      return res.status(404).json({ restaurants: "Restaurant Not Found!!!" });

    return res.json({ restaurants: updatedRestaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   DELETE /restaurants/delete
// @des     update exisitng restaurant data
// @access  PRIVATE
Router.delete("/delete", passport.authenticate("jwt"), async (req, res) => {
  try {
    const deleteRestaurant = await RestaurantModal.findByIdAndRemove(
      req.body.retaurantData._id
    );
    return res.json({ restaurants: Boolean(deleteRestaurant) });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @Route   GET /restaurants/
// @des     GEt a single restaurant data
// @access  PUBLIC
Router.get("/:id", async (req, res) => {
  try {
    const restaurant = await RestaurantModal.findById(req.params.id);
    if (!restaurant)
      return res.status(404).json({ restaurants: "Restaurant Not Found!!!" });

    return res.json({ restaurants: restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
