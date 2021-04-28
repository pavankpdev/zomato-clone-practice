// Libraries
import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isVeg: {
    type: Boolean,
    default: false,
  },
  isContainsEgg: {
    type: Boolean,
    default: false,
  },
  isNonVeg: {
    type: Boolean,
    default: false,
  },
  category: { type: String, required: true },
  restaurant: {
    type: mongoose.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  photos: {
    type: mongoose.Types.ObjectId,
    ref: "Images",
  },

  price: { type: Number, default: 150, required: true },
  addOns: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Foods",
    },
  ],
});

export const FoodModal = mongoose.model("Foods", FoodSchema);
