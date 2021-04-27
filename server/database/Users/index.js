// Libraries
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  address: [{ type: String, required: true }],
  phoneNumbers: [{ type: Number, required: true }],
  orders: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Orders",
    },
  ],
  reviews: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Reviews",
    },
  ],
});
export const UserModal = mongoose.model("Users", UserSchema);
