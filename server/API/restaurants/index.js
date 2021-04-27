import express from "express";
import passport from "passport";

// Database Modals
import { RestaurantModal } from "../../database/AllModals";

const Router = express.Router();

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

Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
  try {
    console.log(req.body.retaurantData);
    const newRetaurant = await RestaurantModal.create(req.body.retaurantData);
    return res.json({ newRetaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
