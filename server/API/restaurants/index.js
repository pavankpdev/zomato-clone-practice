import express from "express";

// Database Modals
import { RestaurantModal } from "../../database/AllModals";

const Router = express.Router();

Router.get("/", async (req, res) => {
  const city = req.query.city;
  const allRestaurants = await RestaurantModal.find({
    city: city || "Bangalore",
  });
  return res.json({ restaurants: allRestaurants });
});

export default Router;
