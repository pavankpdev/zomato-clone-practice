// Libraries
const mongoose = require("mongoose");

const RestaurantSchema = new mongoose({
  name: {
    type: String,
    required: true,
  },
  location: { type: String, required: true },
  mapLocation: { type: String, required: true },
  cuisine: [String],
  restaurantTimings: String,
  contactNumber: Number,
  website: String,
  popularDishes: [String],
  averageCost: Number,
  amenities: [String],
  menuImage: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Images",
    },
  ],
  menu: {
    type: mongoose.Types.ObjectId,
    ref: "Menu",
  },
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Reviews" }],
  photos: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Images",
    },
  ],
});
