// Libraries
import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  reviewText: { type: String, required: true },
  isRestaurantReview: { type: String, default: false },
  isFoodReview: { type: String, default: false },
  food: { type: mongoose.Types.ObjectId, ref: "Images" },
  restaurant: {
    type: mongoose.Types.ObjectId,
    ref: "Restaurant",
  },
  rating: Number,
  photos: {
    type: mongoose.Types.ObjectId,
    ref: "Images",
  },
});
export const ReviewModal = mongoose.model("Reviews", ReviewSchema);
